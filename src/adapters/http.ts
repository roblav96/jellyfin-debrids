import * as async from 'https://deno.land/std/async/mod.ts'
import * as what from 'https://deno.land/x/is_what/src/index.ts'
import deepmerge from 'https://esm.sh/deepmerge?dev'
import { Status, STATUS_TEXT } from 'https://deno.land/std/http/http_status.ts'

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'HEAD' | 'DELETE' | 'OPTIONS'
export interface HttpInit extends Omit<RequestInit, 'headers'> {
	// readonly meta?: Partial<{ retries: number }>
	buildRequest: ((init: HttpInit) => Promise<void>)[]
	client?: Deno.HttpClient
	delay?: number
	form?: Record<string, string>
	headers: Record<string, string>
	json?: unknown
	memoize?: number
	method: RequestMethod
	multipart?: Record<string, string | Blob>
	prefixUrl?: string
	qsArrayBracket?: boolean
	randomize?: number
	retries: number
	retryMethods: Set<RequestMethod>
	retryStatusCodes: Set<number>
	searchParams: Record<string, string | string[]>
	timeout: number
}

export class HttpError extends Error {
	// get code() {
	// 	return this.response.status
	// }
	constructor(public input: string, public init: HttpInit, public response: Response) {
		// let statusText = response.statusText
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

	static merge(x: Partial<HttpInit>, y: Partial<HttpInit>) {
		return deepmerge(x, y, {
			isMergeableObject: (value) => {
				return Array.isArray(value) || what.isPlainObject(value)
			},
		})
	}

	constructor(public init = {} as Partial<HttpInit>) {
		this.init = Http.merge(Http.defaults, init)
	}

	extend(init: Partial<HttpInit>) {
		return new Http(Http.merge(this.init, init))
	}

	private fetch(input: string, init: HttpInit) {
		console.log('fetch ->', input)
		if (!(Number.isFinite(init.timeout) && init.timeout > 0)) {
			return fetch(input, init)
		}
		let aborter = async.deferred<never>()
		let controller = new AbortController()
		let timer = setTimeout(() => {
			controller.abort()
			aborter.reject(new AbortError(input, init))
		}, init.timeout)
		return Promise.race([
			fetch(input, { ...init, signal: controller.signal }),
			aborter,
		]).finally(() => clearTimeout(timer))
	}

	private async retry(input: string, init: HttpInit) /** : Promise<Response> */ {
		// let response: Response
		try {
			let response = await this.fetch(input, init)
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
					init.retries--
					return this.retry(input, init)
				}
			}
			return Promise.reject(error)
		}
		// return response
	}

	async request(input: string, init = {} as HttpInit) {
		init = Http.merge(this.init, init)

		for (let hook of init.buildRequest) {
			await hook(init)
		}

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

		if (init.delay) {
			await async.delay(init.delay)
		}
		if (init.randomize) {
			let [min, max] = [init.randomize * Math.E * 0.1, init.randomize]
			let delay = Math.ceil(Math.floor(Math.random() * (max - min + 1)) + min)
			await async.delay(delay)
		}

		let response = await this.retry(url.toString(), init)
		console.log('response ->', response)

		// if (response.headers.get('content-type')?.startsWith('application/json')) {
		// 	return await response.json()
		// }
	}

	get(input: string, init = {} as Partial<HttpInit>) {
		return this.request(input, { ...init, method: 'GET' } as HttpInit)
	}
	post(input: string, init = {} as Partial<HttpInit>) {
		return this.request(input, { ...init, method: 'POST' } as HttpInit)
	}
	put(input: string, init = {} as Partial<HttpInit>) {
		return this.request(input, { ...init, method: 'PUT' } as HttpInit)
	}
	patch(input: string, init = {} as Partial<HttpInit>) {
		return this.request(input, { ...init, method: 'PATCH' } as HttpInit)
	}
	head(input: string, init = {} as Partial<HttpInit>) {
		return this.request(input, { ...init, method: 'HEAD' } as HttpInit)
	}
	delete(input: string, init = {} as Partial<HttpInit>) {
		return this.request(input, { ...init, method: 'DELETE' } as HttpInit)
	}
}

export default new Http()
