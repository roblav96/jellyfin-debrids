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
	afterResponse?: AfterResponseHook[]
	beforeRequest?: BeforeRequestHook[]
	buildRequest?: BuildRequestHook[]
	delay?: number
	form?: Record<string, string>
	headers?: Record<string, string>
	memoize?: number
	method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'HEAD' | 'DELETE'
	mime?: keyof Omit<KyResponsePromise, 'then' | 'catch' | 'finally'>
	multipart?: Record<string, string | Blob>
	qsArrayBracket?: boolean
	randomize?: number
	searchParams?: Record<string, string | string[]>
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
				'user-agent': 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)',
			},
			timeout: 5000,
		} as Options
	}

	constructor(public options: Options, defaults = Http.defaults) {
		this.options = deepmerge(defaults, options)
	}

	async request(url: string, options = {} as Options) {
		options = deepmerge(this.options, options)

		for (let hook of options.buildRequest!) {
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

		if (options.searchParams && options.qsArrayBracket == true) {
			options.searchParams = qs.stringify(options.searchParams, {
				arrayFormat: 'bracket',
			}) as any
		}

		let beforeRequest = [
			...options.beforeRequest!,
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
		] as BeforeRequestHook[]

		let afterResponse = [
			...options.afterResponse!,
			// async (request, options, response) => {
			// 	console.log('request ->', request.url, '\n ', request.headers)
			// 	console.log('options ->', options)
			// 	console.log('response ->', response)
			// },
		] as AfterResponseHook[]

		if (options.prefixUrl && url.startsWith('/')) {
			url = url.slice(1)
		}

		let request = ky(url, {
			...options,
			hooks: { beforeRequest, afterResponse },
		} as KyOptions)
		if (options.mime) {
			return await request[options.mime]()
		}
		return await request

		// for (let hook of options.beforeFetch!) {
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

	get(url: string, options = {} as Options) {
		return this.request(url, { ...options, method: 'GET' })
	}
	post(url: string, options = {} as Options) {
		return this.request(url, { ...options, method: 'POST' })
	}
	put(url: string, options = {} as Options) {
		return this.request(url, { ...options, method: 'PUT' })
	}
	patch(url: string, options = {} as Options) {
		return this.request(url, { ...options, method: 'PATCH' })
	}
	head(url: string, options = {} as Options) {
		return this.request(url, { ...options, method: 'HEAD' })
	}
	delete(url: string, options = {} as Options) {
		return this.request(url, { ...options, method: 'DELETE' })
	}
}

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
