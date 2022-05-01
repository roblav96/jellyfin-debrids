import * as async from 'https://deno.land/std/async/mod.ts'
import * as what from 'https://deno.land/x/is_what/src/index.ts'
import arrify from 'https://esm.sh/arrify?dev'
import Db from '../adapters/storage.ts'
import hashIt from 'https://esm.sh/hash-it?dev'
import { deepMerge } from 'https://deno.land/std/collections/deep_merge.ts'
import { getCookies } from 'https://deno.land/std/http/cookie.ts'
import { Status, STATUS_TEXT } from 'https://deno.land/std/http/http_status.ts'

export interface HttpInit extends Omit<RequestInit, 'headers' | 'redirect' | 'signal'> {
	beforeRequest?: ((init: HttpInit) => Promise<void> | void)[]
	client?: Deno.HttpClient
	cookies?: boolean
	debug?: boolean
	delay?: number
	form?: object
	headers: Record<string, string>
	json?: object
	memoize?: number
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'HEAD' | 'DELETE' | 'OPTIONS'
	multipart?: object
	prefixUrl?: string
	randelay?: number
	retries: number
	retryStatusCodes: Set<number>
	searchParams?: object
	timeout: number
}

export class HttpError extends DOMException {
	constructor(public input: string, public init: HttpInit, public response: Response) {
		super(response.statusText ?? STATUS_TEXT.get(response.status), 'HttpError')
		Object.defineProperty(this, 'code', { value: this.response.status })
	}
}

export class Http {
	static get defaults() {
		return {
			headers: {
				'user-agent': 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)',
			},
			method: 'GET',
			retries: 2,
			retryStatusCodes: new Set<number>([403, 408, 413, 429, 500, 502, 503, 504]),
			timeout: 10000,
		} as HttpInit
	}

	static randelay(delay: number) {
		let [min, max] = [delay * Math.E * 0.1, delay]
		return Math.ceil(Math.floor(Math.random() * (max - min + 1)) + min)
	}

	static merge(x: Partial<HttpInit>, y: Partial<HttpInit>) {
		return deepMerge(x, y) as any as HttpInit
	}

	static toIterable<T extends FormData | URLSearchParams>(iterable: T, input: object) {
		for (let [key, value] of Object.entries(input)) {
			if (what.isNullOrUndefined(value)) {
				iterable.delete(key)
			} else if (what.isArray(value)) {
				value.forEach((v) => iterable.append(key, v))
			} else {
				iterable.set(key, value)
			}
		}
		return iterable
	}

	constructor(public options = {} as Partial<HttpInit>) {
		this.options = Http.merge(Http.defaults, options)
	}

	extend(options: Partial<HttpInit>) {
		return new Http(Http.merge(this.options, options))
	}

	private async fetch(input: string, init: HttpInit): Promise<Response> {
		let url = new URL(input)
		let headers = new Headers(init.headers)
		if (init.cookies == true) {
			let cookies = [] as string[]
			let db = new Db(`cookies:${url.hostname}`)
			for (let [name, value] of await db.entries()) {
				headers.append('cookie', `${name}=${value}`)
			}
			if (headers.has('cookie')) {
				headers.set('cookie', headers.get('cookie')!.replaceAll(', ', '; '))
			}
		}

		try {
			let response = await fetch(input, {
				...init,
				headers,
				redirect: 'manual',
				signal: what.isPositiveNumber(init.timeout)
					? AbortSignal.timeout(init.timeout)
					: null,
			})
			console.log('response ->', { ...response })

			console.log('response.headers ->', [...response.headers.entries()])
			if (init.cookies == true) {
				let keys = ['domain', 'expires', 'httponly', 'maxage', 'path', 'samesite', 'secure']
				let db = new Db(`cookies:${url.hostname}`)
				for (let [key, value] of response.headers.entries()) {
					if (key != 'set-cookie') continue
					let cookie = getCookies(new Headers({ cookie: value }))
					let name = Object.keys(cookie).find((k) => !keys.includes(k.toLowerCase()))
					if (!name) continue
					// console.log('name, cookie[name] ->', name, cookie[name])
					let expires = Date.parse(cookie['expires'] || cookie['Expires'])
					if (what.isPositiveNumber(expires) && expires > Date.now()) {
						await db.set(name, cookie[name], expires - Date.now())
					} else {
						await db.set(name, cookie[name])
					}
				}
			}

			if (response.status >= 301 && response.status <= 308) {
				url.pathname = response.headers.get('location')!
				return this.fetch(url.toString(), init)
			}

			if (!response.ok) {
				throw new HttpError(input, init, response)
			}
			return response
		} catch (error) {
			if (
				(error instanceof DOMException && error.name == 'TimeoutError') ||
				(error instanceof HttpError && init.retryStatusCodes.has(error.response.status))
			) {
				if (init.retries > 0 && init.method == 'GET') {
					let delay = Http.randelay(1000)
					if (error instanceof HttpError && error.response.headers.has('retry-after')) {
						let after = error.response.headers.get('retry-after')!
						let ms = Date.parse(after)
						if (what.isPositiveNumber(ms) && ms > Date.now()) {
							delay = ms - Date.now()
						} else if (what.isPositiveNumber(Number(after))) {
							delay = Number(after) * 1000
						}
					}
					await async.delay(delay)
					init.retries--
					return this.fetch(input, init)
				}
			}
			throw error
		}
	}

	async request(input: string, options = {} as Partial<HttpInit>) {
		let init = Http.merge(this.options, options)

		for (let hook of init.beforeRequest ?? []) {
			await hook(init)
		}

		if (init.prefixUrl) {
			if (init.prefixUrl.endsWith('/') && input.startsWith('/')) {
				input = `${init.prefixUrl}${input.slice(1)}`
			} else if (!init.prefixUrl.endsWith('/') && input && !input.startsWith('/')) {
				input = `${init.prefixUrl}/${input}`
			} else {
				input = `${init.prefixUrl}${input}`
			}
		}
		let url = new URL(input)
		if (init.searchParams) {
			Http.toIterable(url.searchParams, init.searchParams)
		}

		let headers = new Headers(init.headers)

		if (init.json) {
			init.body = JSON.stringify(init.json)
			headers.set('content-type', 'application/json')
		}

		if (init.form) {
			init.body = Http.toIterable(new URLSearchParams(), init.form)
		}

		if (init.multipart) {
			init.body = Http.toIterable(new FormData(), init.multipart)
		}

		let reqid = ''
		if (what.isPositiveNumber(init.memoize)) {
			let reqs = [init.method, url.toString(), arrify(headers), arrify(init.body)]
			// console.log('reqs ->', reqs)
			reqid = hashIt(reqs).toString()
			let db = new Db(`memoize:${url.hostname}`)
			let memoized = await db.get(reqid)
			if (what.isArray(memoized)) {
				let [body, headers, init] = memoized
				let response = new Response(body, init)
				Object.assign(response, init, { headers: new Headers(headers) })
				return response
			}
		}

		Object.assign(init, { headers })

		if (init.delay) {
			await async.delay(init.delay)
		}
		if (init.randelay) {
			await async.delay(Http.randelay(init.randelay))
		}

		console.log('url.toString() ->', url.toString())
		if (init.debug == true) {
			console.log(`[${init.method}]`, `${url.host}${url.pathname}`, init)
		}

		let response = await this.fetch(url.toString(), init)

		if (what.isPositiveNumber(init.memoize)) {
			let memoized = Object.assign(response.clone(), response)
			let body = await memoized.text()
			let db = new Db(`memoize:${url.hostname}`)
			await db.set(reqid, [body, [...memoized.headers], memoized], init.memoize)
		}

		// let memoized = new Response(response.body, response)
		// Object.assign(memoized, response)
		// console.log('memoized ->', JSON.stringify(memoized))

		return response

		// if (response.headers.get('content-type')?.startsWith('application/json')) {
		// 	return await response.json()
		// }
	}

	async arrayBuffer(
		input: string,
		options = {} as Partial<HttpInit> & {
			afterResponse?: ((buffer: ArrayBuffer) => Promise<ArrayBuffer>)[]
		},
	) {
		let buffer = await (await this.request(input, options)).arrayBuffer()
		for (let hook of options.afterResponse ?? []) {
			buffer = await hook(buffer)
		}
		return buffer
	}
	async blob(
		input: string,
		options = {} as Partial<HttpInit> & {
			afterResponse?: ((blob: Blob) => Promise<Blob>)[]
		},
	) {
		let blob = await (await this.request(input, options)).blob()
		for (let hook of options.afterResponse ?? []) {
			blob = await hook(blob)
		}
		return blob
	}
	async formData(
		input: string,
		options = {} as Partial<HttpInit> & {
			afterResponse?: ((formData: FormData) => Promise<void>)[]
		},
	) {
		let formData = await (
			await this.request(
				input,
				Http.merge({ headers: { accept: 'multipart/form-data' } }, options),
			)
		).formData()
		for (let hook of options.afterResponse ?? []) {
			await hook(formData)
		}
		return formData
	}
	async json<T = object>(
		input: string,
		options = {} as Partial<HttpInit> & {
			afterResponse?: ((json: T) => Promise<void>)[]
		},
	) {
		let response = await this.request(
			input,
			Http.merge({ headers: { accept: 'application/json' } }, options),
		)
		let json: T
		try {
			json = JSON.parse(await response.text())
		} catch {
			return
		}
		for (let hook of options.afterResponse ?? []) {
			await hook(json)
		}
		return json
	}
	async text(
		input: string,
		options = {} as Partial<HttpInit> & {
			afterResponse?: ((text: string) => Promise<string>)[]
		},
	) {
		let text = await (
			await this.request(input, Http.merge({ headers: { accept: 'text/plain' } }, options))
		).text()
		for (let hook of options.afterResponse ?? []) {
			text = await hook(text)
		}
		return text
	}

	get(input: string, options = {} as Partial<HttpInit>) {
		options.method = 'GET'
		return this.request(input, options)
	}
	post(input: string, options = {} as Partial<HttpInit>) {
		options.method = 'POST'
		return this.request(input, options)
	}
	put(input: string, options = {} as Partial<HttpInit>) {
		options.method = 'PUT'
		return this.request(input, options)
	}
	patch(input: string, options = {} as Partial<HttpInit>) {
		options.method = 'PATCH'
		return this.request(input, options)
	}
	head(input: string, options = {} as Partial<HttpInit>) {
		options.method = 'HEAD'
		return this.request(input, options)
	}
	delete(input: string, options = {} as Partial<HttpInit>) {
		options.method = 'DELETE'
		return this.request(input, options)
	}
}

export default new Http()
