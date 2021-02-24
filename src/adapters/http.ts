import * as async from 'https://deno.land/std/async/mod.ts'
import * as what from 'https://deno.land/x/is_what/src/index.ts'
import deepmerge from 'https://esm.sh/deepmerge?dev'
import ky, { KyOptions, KyResponsePromise } from '../shims/ky.ts'
// import urlJoin from 'https://esm.sh/url-join?dev'
import { join as urlJoin } from 'https://deno.land/x/urlcat/src/index.ts'
import { status } from 'https://deno.land/x/status/status.ts'
import { Status, STATUS_TEXT } from 'https://deno.land/std/http/http_status.ts'

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'HEAD' | 'DELETE' | 'OPTIONS'
export interface Options extends Omit<RequestInit, 'headers'> {
	// readonly meta?: Partial<{ retries: number }>
	buildRequest: ((options: Options) => Promise<void>)[]
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
	retryLimit: number
	retryMethods: Set<RequestMethod>
	retryStatusCodes: Set<number>
	searchParams: Record<string, string | string[]>
	timeout: number
}

export class AbortError extends DOMException {
	constructor(public input: string, public options: Options) {
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
			retryLimit: 3,
			retryMethods: new Set(['GET', 'PUT', 'HEAD', 'DELETE', 'OPTIONS']),
			retryStatusCodes: new Set([403, 408, 413, 429, 500, 502, 503, 504]),
			searchParams: {},
			timeout: 10000,
		} as Options
	}

	static merge(x: Partial<Options>, y: Partial<Options>) {
		return deepmerge(x, y, {
			isMergeableObject: (value) => {
				return Array.isArray(value) || what.isPlainObject(value)
			},
		})
	}

	constructor(public options = {} as Partial<Options>) {
		this.options = Http.merge(Http.defaults, options)
	}

	extend(options: Partial<Options>) {
		return new Http(Http.merge(this.options, options))
	}

	private async fetch(input: string, options: Options) {
		let controller = new AbortController()
		options.signal = controller.signal
		let response = await Promise.race([
			fetch(input, options), //.then((response) => ({ response })),
			async.delay(options.timeout).then(() => {
				return Promise.reject(new AbortError(input, options))
			}), //.then(() => ({ timeout: true })),
		])
		console.log('response ->', response)
		console.log('what.getType(response) ->', what.getType(response))
		// let timeout = setTimeout(() => {
		// 	controller.abort()
		// 	p.reject(new Deno.errors.ConnectionAborted())
		// }, options.timeout)

		// return fetch(input, options)
	}

	async request(input: string, options = {} as Options) {
		options = Http.merge(this.options, options)

		for (let hook of options.buildRequest) {
			await hook(options)
		}

		let url = new URL(options.prefixUrl ?? input)
		if (options.prefixUrl) {
			let prefixUrl = options.prefixUrl
			// if (!url.pathname.endsWith('/') && !'#&?'.includes(input.charAt(0))) {
			// 	prefixUrl += '/'
			// }
			url = new URL(
				input.startsWith('/') ? input.slice(1) : input,
				!prefixUrl.endsWith('/') ? `${prefixUrl}/` : prefixUrl,
			)
		}
		for (let [key, value] of Object.entries(options.searchParams)) {
			if (what.isString(value)) {
				url.searchParams.set(key, value)
			} else if (Array.isArray(value)) {
				if (options.qsArrayBracket == true) key = `${key}[]`
				value.forEach((v) => url.searchParams.append(key, v))
			}
		}

		if (options.multipart) {
			let multipart = new FormData()
			for (let key in options.multipart) {
				multipart.append(key, options.multipart[key])
			}
			options.body = multipart
		}

		if (options.form) {
			options.body = new URLSearchParams(options.form)
		}

		if (options.delay) {
			await async.delay(options.delay)
		}
		if (options.randomize) {
			let [min, max] = [options.randomize * Math.E * 0.1, options.randomize]
			let delay = Math.ceil(Math.floor(Math.random() * (max - min + 1)) + min)
			await async.delay(delay)
		}

		return await this.fetch(url.toString(), options)

		// let afterResponse = [
		// 	// async (request, options, response) => {
		// 	// 	console.log(response.status, request.url)
		// 	// 	console.log(request.url, '\n ', request.headers)
		// 	// },
		// 	...options.afterResponse,
		// ] as AfterResponseHook[]

		// // @ts-ignore
		// let request = ky(url, {
		// 	// @ts-ignore
		// 	...(options as KyOptions),
		// 	// @ts-ignore
		// 	hooks: { beforeRequest, afterResponse },
		// } as KyOptions)
		// // @ts-ignore
		// if (options.mime) return await request[options.mime]()
		// return await request

		// for (let hook of options.beforeFetch) {
		// 	let response = await hook(options)
		// 	if (response instanceof Response) {
		// 		return response
		// 	}
		// }

		// return response.json

		// if (options.auto != true) {
		// 	return response
		// }

		// if (response.headers.get('content-type')?.startsWith('application/json')) {
		// 	return await response.json()
		// }
	}

	get(url: string, options = {} as Partial<Options>) {
		return this.request(url, { ...options, method: 'GET' } as Options)
	}
	post(url: string, options = {} as Partial<Options>) {
		return this.request(url, { ...options, method: 'POST' } as Options)
	}
	put(url: string, options = {} as Partial<Options>) {
		return this.request(url, { ...options, method: 'PUT' } as Options)
	}
	patch(url: string, options = {} as Partial<Options>) {
		return this.request(url, { ...options, method: 'PATCH' } as Options)
	}
	head(url: string, options = {} as Partial<Options>) {
		return this.request(url, { ...options, method: 'HEAD' } as Options)
	}
	delete(url: string, options = {} as Partial<Options>) {
		return this.request(url, { ...options, method: 'DELETE' } as Options)
	}
}

export default new Http()

// export default ky.extend({
// 	// keepalive: true,
// 	searchParams: {},
// 	// searchParams: new URLSearchParams(),
// 	timeout: 5000,
// 	hooks: {
// 		// beforeRequestPrepend: [
// 		// 	(request, options) => {
// 		// 		options.searchParams ??= {}
// 		// 	},
// 		// ],
// 		beforeRequest: [
// 			async (request, options) => {
// 				let hooks = [
// 					options.beforeRequestPrepend ?? [],
// 					options.beforeRequestAppend ?? [],
// 				].flat()
// 				for (let hook of hooks) {
// 					let hooked = await hook(request, options)
// 					if (hooked instanceof Request || hooked instanceof Response) {
// 						return hooked
// 					}
// 				}
// 				console.log('options.searchParams ->', options.searchParams)
// 				console.log('request.url ->', request.url)
// 				return new Request(request)
// 			},
// 		],
// 		beforeRequestAppend: [
// 			async (request, options) => {
// 				if (options.delay) {
// 					await async.delay(options.delay)
// 				}
// 				if (options.randomize) {
// 					let [min, max] = [options.randomize * Math.E * 0.1, options.randomize]
// 					let delay = Math.ceil(Math.floor(Math.random() * (max - min + 1)) + min)
// 					await async.delay(delay)
// 				}
// 			},
// 		],
// 		// afterResponse: [
// 		// 	async (request, options, response) => {
// 		// 		console.log('response.headers ->', response.headers)
// 		// 	},
// 		// ],
// 	},
// }) as ReturnType<typeof import('https://esm.sh/ky/index.d.ts').default.extend>
