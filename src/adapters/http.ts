import * as async from 'https://deno.land/std/async/mod.ts'
import * as what from 'https://deno.land/x/is_what/src/index.ts'
import Db from '../adapters/storage.ts'
import deepmerge from 'https://esm.sh/deepmerge?dev'
import { createHash } from 'https://deno.land/std/hash/mod.ts'
import { getCookies } from 'https://deno.land/std/http/cookie.ts'
import { Status, STATUS_TEXT } from 'https://deno.land/std/http/http_status.ts'

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'HEAD' | 'DELETE' | 'OPTIONS'
export interface HttpInit extends Omit<RequestInit, 'headers' | 'signal'> {
	buildRequest: ((init: HttpInit) => Promise<void>)[]
	client?: Deno.HttpClient
	cookies?: boolean
	delay?: number
	form?: Record<string, string>
	headers: Record<string, string>
	json?: unknown
	memoize?: number
	method: RequestMethod
	multipart?: Record<string, string | Blob>
	prefixUrl?: string
	qsArrayBracket?: boolean
	randelay?: number
	retries: number
	retryMethods: Set<RequestMethod>
	retryStatusCodes: Set<number>
	searchParams: Record<string, string | string[]>
	timeout: number
}

export class HttpError extends Error {
	constructor(public input: string, public init: HttpInit, public response: Response) {
		super(response.statusText ?? STATUS_TEXT.get(response.status))
		this.name = 'HttpError'
	}
}

export class AbortError extends DOMException {
	static ABORT_ERR = 20
	constructor(public input: string, public init: HttpInit) {
		super('Aborted', 'AbortError')
	}
}

export class Http {
	static get defaults() {
		return {
			buildRequest: [],
			headers: {
				'user-agent': 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)',
			},
			method: 'GET',
			retries: 2,
			retryMethods: new Set(['GET', 'PUT', 'HEAD', 'DELETE', 'OPTIONS']),
			// retryStatusCodes: new Set([403, 408, 413, 429, 500, 502, 503, 504]),
			retryStatusCodes: new Set([
				Status.Forbidden,
				Status.RequestTimeout,
				Status.RequestEntityTooLarge,
				Status.TooManyRequests,
				Status.InternalServerError,
				Status.BadGateway,
				Status.ServiceUnavailable,
				Status.GatewayTimeout,
			]),
			searchParams: {},
			timeout: 10000,
		} as HttpInit
	}

	static randelay(delay: number) {
		let [min, max] = [delay * Math.E * 0.1, delay]
		return Math.ceil(Math.floor(Math.random() * (max - min + 1)) + min)
	}

	static merge(x: Partial<HttpInit>, y: Partial<HttpInit>) {
		return deepmerge(x, y, {
			isMergeableObject: (value) => {
				return Array.isArray(value) || what.isPlainObject(value)
			},
		})
	}

	constructor(public options = {} as Partial<HttpInit>) {
		this.options = Http.merge(Http.defaults, options)
	}

	extend(options: Partial<HttpInit>) {
		return new Http(Http.merge(this.options, options))
	}

	private async fetch(input: string, init: HttpInit): Promise<Response> {
		try {
			let response: Response
			if (Number.isFinite(init.timeout) && init.timeout > 0) {
				let aborter = async.deferred<never>()
				let controller = new AbortController()
				let timer = setTimeout(() => {
					controller.abort()
					aborter.reject(new AbortError(input, init))
				}, init.timeout)
				response = await Promise.race([
					fetch(input, { ...init, signal: controller.signal }),
					aborter,
				]).finally(() => clearTimeout(timer))
			} else {
				response = await fetch(input, init)
			}
			if (!response.ok) {
				throw new HttpError(input, init, response)
			}
			return response
		} catch (error) {
			if (init.retries > 0 && init.retryMethods.has(init.method)) {
				if (
					error instanceof AbortError ||
					(error instanceof HttpError && init.retryStatusCodes.has(error.response.status))
				) {
					if (error instanceof HttpError && error.response.headers.has('retry-after')) {
						let after = error.response.headers.get('retry-after')!
						let delay = Number(after) * 1000
						if (Number.isNaN(delay)) {
							delay = Date.parse(after) - Date.now()
						}
						await async.delay(delay)
					} else {
						await async.delay(Http.randelay(1000))
					}
					init.retries--
					return this.fetch(input, init)
				}
			}
			throw error
		}
	}

	async request(input: string, options = {} as Partial<HttpInit>) {
		let init = Http.merge(this.options, options)

		for (let hook of init.buildRequest) {
			await hook(init)
		}

		let headers = new Headers(init.headers)
		let url = new URL(init.prefixUrl ?? input)
		if (init.prefixUrl) {
			let prefixUrl = init.prefixUrl
			if (!url.pathname.endsWith('/') && !'#&?'.includes(input.charAt(0))) {
				prefixUrl += '/'
			}
			url = new URL(input.startsWith('/') ? input.slice(1) : input, prefixUrl)
		}
		for (let [key, value] of Object.entries(init.searchParams)) {
			if (what.isString(value)) {
				url.searchParams.set(key, value)
			} else if (Array.isArray(value)) {
				if (init.qsArrayBracket == true) key = `${key}[]`
				value.forEach((v) => url.searchParams.append(key, v))
			}
		}

		let inithash = ''
		if (init.memoize) {
			let { body, form, json, method, multipart } = init
			let values = [body, form, json, method, multipart]
			values.push(url.toString(), [...headers])
			inithash = createHash('md5').update(JSON.stringify(values)).toString()
			let db = new Db(`memoize:${url.hostname}`)
			let memoized = await db.get(inithash)
			if (Array.isArray(memoized)) {
				let [body, headers, init] = memoized
				let response = new Response(body, init)
				Object.assign(response, init, { headers: new Headers(headers) })
				return response
			}
		}

		if (init.json) {
			init.body = JSON.stringify(init.json)
			headers.set('content-type', 'application/json')
		}

		if (init.multipart) {
			let multipart = new FormData()
			for (let key in init.multipart) {
				multipart.append(key, init.multipart[key])
			}
			init.body = multipart
		}

		if (init.form) {
			init.body = new URLSearchParams(init.form)
		}

		if (init.cookies == true) {
			let db = new Db(`cookies:${url.hostname}`)
			// await db.clear()
			for (let [name, value] of await db.entries()) {
				// console.log('name, value ->', name, value)
				headers.append('cookie', `${name}=${value}`)
			}
			if (headers.has('cookie')) {
				headers.set('cookie', headers.get('cookie')!.replaceAll(', ', '; '))
			}
			// console.warn('cookies ->', headers.get('cookie'))
		}

		if (init.delay) {
			await async.delay(init.delay)
		}
		if (init.randelay) {
			await async.delay(Http.randelay(init.randelay))
		}

		// console.log('url ->', url)
		// console.log('headers ->', [...headers])
		Object.assign(init, { headers })
		let response = await this.fetch(url.toString(), init)

		if (init.cookies == true) {
			let db = new Db(`cookies:${url.hostname}`)
			for (let [key, value] of response.headers.entries()) {
				if (key != 'set-cookie') continue
				let cookie = getCookies({ headers: new Headers({ cookie: value }) })
				let keys = ['domain', 'expires', 'httponly', 'maxage', 'path', 'samesite', 'secure']
				let name = Object.keys(cookie).find((k) => !keys.includes(k.toLowerCase()))
				if (!name) continue
				let expires = Date.parse(cookie.expires || cookie.Expires)
				if (Number.isFinite(expires) && expires > Date.now()) {
					await db.set(name, cookie[name], expires - Date.now())
				} else {
					await db.set(name, cookie[name])
				}
			}
		}

		if (init.memoize) {
			let memoized = Object.assign(response.clone(), response)
			let body = await memoized.text()
			let db = new Db(`memoize:${url.hostname}`)
			await db.set(inithash, [body, [...memoized.headers], memoized], init.memoize)
		}

		// let memoized = new Response(response.body, response)
		// Object.assign(memoized, response)
		// console.log('memoized ->', JSON.stringify(memoized))

		return response

		// if (response.headers.get('content-type')?.startsWith('application/json')) {
		// 	return await response.json()
		// }
	}

	async arrayBuffer(input: string, options = {} as Partial<HttpInit>) {
		return (
			await this.request(input, Http.merge({ headers: { accept: '*/*' } }, options))
		).arrayBuffer()
	}
	async blob(input: string, options = {} as Partial<HttpInit>) {
		return (
			await this.request(input, Http.merge({ headers: { accept: '*/*' } }, options))
		).blob()
	}
	async formData(input: string, options = {} as Partial<HttpInit>) {
		return (
			await this.request(
				input,
				Http.merge({ headers: { accept: 'multipart/form-data' } }, options),
			)
		).formData()
	}
	async json<T = unknown>(input: string, options = {} as Partial<HttpInit>) {
		let response = await this.request(
			input,
			Http.merge({ headers: { accept: 'application/json' } }, options),
		)
		try {
			return JSON.parse((await response.text()) as any) as T
		} catch {
			return {} as never
		}
	}
	async text(input: string, options = {} as Partial<HttpInit>) {
		return (
			await this.request(input, Http.merge({ headers: { accept: 'text/*' } }, options))
		).text()
	}

	get(input: string, options = {} as Partial<HttpInit>) {
		return this.request(input, { ...options, method: 'GET' })
	}
	post(input: string, options = {} as Partial<HttpInit>) {
		return this.request(input, { ...options, method: 'POST' })
	}
	put(input: string, options = {} as Partial<HttpInit>) {
		return this.request(input, { ...options, method: 'PUT' })
	}
	patch(input: string, options = {} as Partial<HttpInit>) {
		return this.request(input, { ...options, method: 'PATCH' })
	}
	head(input: string, options = {} as Partial<HttpInit>) {
		return this.request(input, { ...options, method: 'HEAD' })
	}
	delete(input: string, options = {} as Partial<HttpInit>) {
		return this.request(input, { ...options, method: 'DELETE' })
	}
}

export default new Http()
