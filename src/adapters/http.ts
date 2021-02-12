import * as async from 'https://deno.land/std/async/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
import * as qs from 'https://esm.sh/query-string?dev'
import deepmerge from 'https://esm.sh/deepmerge?dev'
import ky, { KyOptions, KyResponsePromise } from '../shims/ky.ts'

type BuildRequestHook = (options: Options) => Promise<void>
type BeforeRequestHook = (request: Request, options: Options) => Promise<Request | Response | void>
type AfterResponseHook = (
	request: Request,
	options: Options,
	response: Response,
) => Promise<Response | void>

export interface Options extends Omit<KyOptions, 'hooks' | 'searchParams'> {
	afterResponse: AfterResponseHook[]
	beforeRequest: BeforeRequestHook[]
	buildRequest: BuildRequestHook[]
	delay?: number
	form?: Record<string, string>
	headers: Record<string, string>
	memoize?: number
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'HEAD' | 'DELETE'
	mime: keyof Omit<KyResponsePromise, keyof Promise<Response>>
	multipart?: Record<string, string | Blob>
	qsArrayBracket?: boolean
	randomize?: number
	searchParams: Record<string, string | string[]>
}

export class Http {
	static get defaults() {
		return {
			afterResponse: [],
			beforeRequest: [],
			buildRequest: [],
			method: 'GET',
			mime: 'json',
			headers: {
				'User-Agent': 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)',
			},
			searchParams: {},
			timeout: 5000,
		} as Options
	}

	constructor(public options = {} as Partial<Options>) {
		this.options = deepmerge(Http.defaults, options)
	}

	extend(options: Partial<Options>) {
		return new Http(deepmerge(this.options, options))
	}

	async request(url: string, options = {} as Options) {
		options = deepmerge(this.options, options)

		for (let hook of options.buildRequest) {
			await hook(options)
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

		for (let key in options.searchParams) {
			if (options.searchParams[key] == null) {
				delete options.searchParams[key]
			}
		}
		if (Object.keys(options.searchParams).length == 0) {
			delete (options as any).searchParams
		}
		if (options.searchParams && options.qsArrayBracket == true) {
			options.searchParams = qs.stringify(options.searchParams, {
				arrayFormat: 'bracket',
			}) as any
		}

		if (options.prefixUrl && url.startsWith('/')) {
			url = url.slice(1)
		}

		let beforeRequest = [
			...options.beforeRequest,
			async (request, options) => {
				if (options.delay) {
					await async.delay(options.delay)
				}
				if (options.randomize) {
					let [min, max] = [options.randomize * Math.E * 0.1, options.randomize]
					let delay = Math.ceil(Math.floor(Math.random() * (max - min + 1)) + min)
					await async.delay(delay)
				}
			},
			async (request, options) => {
				console.log(request.url, options)
			},
		] as BeforeRequestHook[]

		let afterResponse = [
			// async (request, options, response) => {
			// 	console.log(response.status, request.url)
			// 	console.log(request.url, '\n ', request.headers)
			// },
			...options.afterResponse,
		] as AfterResponseHook[]

		let request = ky(url, {
			...(options as KyOptions),
			hooks: { beforeRequest, afterResponse },
		} as KyOptions)
		if (options.mime) {
			return await request[options.mime]()
		}
		return await request

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
