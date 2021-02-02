import * as async from 'https://deno.land/std/async/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
import * as qs from 'https://esm.sh/query-string?dev'
import deepmerge from 'https://esm.sh/deepmerge?dev'

import ky from '../shims/ky.ts'
declare module 'https://esm.sh/ky/index.d.ts' {
	export interface Options {
		delay?: number
		memoize?: number
		randomize?: number
	}
	export interface Hooks {
		beforeRequestBefore?: BeforeRequestHook[]
		beforeRequestAfter?: BeforeRequestHook[]
	}
	export interface NormalizedOptions extends Omit<Options, 'headers'> {}
}
export { ky }

export class Http {
	constructor() {

	}
}

export default ky.extend({
	// keepalive: true,
	searchParams: {},
	// searchParams: new URLSearchParams(),
	timeout: 5000,
	hooks: {
		// beforeRequestBefore: [
		// 	(request, options) => {
		// 		options.searchParams ??= {}
		// 	},
		// ],
		beforeRequest: [
			async (request, options) => {
				let hooks = [
					options.hooks?.beforeRequestBefore ?? [],
					options.hooks?.beforeRequestAfter ?? [],
				].flat()
				for (let hook of hooks) {
					let hooked = await hook(request, options)
					if (hooked instanceof Request || hooked instanceof Response) {
						return hooked
					}
				}
				console.log('options.searchParams ->', options.searchParams)
				console.log('request.url ->', request.url)
				return new Request(request)
			},
		],
		beforeRequestAfter: [
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
		],
		// afterResponse: [
		// 	async (request, options, response) => {
		// 		console.log('response.headers ->', response.headers)
		// 	},
		// ],
	},
}) as ReturnType<typeof import('https://esm.sh/ky/index.d.ts').default.extend>
