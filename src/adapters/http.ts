import * as qs from 'https://esm.sh/query-string?dev'
import ky from '../shims/ky.ts'

type KyOptions = Parameters<typeof ky['extend']>[0]
interface Config extends KyOptions {
	delay?: number
	memoize?: number
	qsArrayBrackets?: boolean
}

export default ky.extend({
	hooks:{
		beforeRequest: [async (request, options) => {
			console.log('request ->', request)
			console.log('options ->', options)
		}]
	}
})

// export default class Http {
// 	static get defaults() {
// 		return {} as Config
// 	}
// 	private ky = ky.extend(this.config)
// 	constructor(private config: Config) {

// 	}
// 	private request() {

// 	}
// 	get(input: string, config = {} as Config) {
// 		return this.request({ ...config, method: 'GET', url }).then(({ data }) => data)
// 	}
// 	post(input: string, config = {} as Config) {
// 		return this.request({ ...config, method: 'POST', url }).then(({ data }) => data)
// 	}
// 	put(input: string, config = {} as Config) {
// 		return this.request({ ...config, method: 'PUT', url }).then(({ data }) => data)
// 	}
// 	delete(input: string, config = {} as Config) {
// 		return this.request({ ...config, method: 'DELETE', url }).then(({ data }) => data)
// 	}
// }
