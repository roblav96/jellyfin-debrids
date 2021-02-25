import '../devops/console.ts'
import * as what from 'https://deno.land/x/is_what/src/index.ts'
import ky, { KyOptions, KyResponsePromise } from '../shims/ky.ts'
import { Db } from './storage.ts'
import { Http, AbortError } from './http.ts'

const db = Db.fromUrl(import.meta.url)
const httpbin = new Http({
	prefixUrl: 'https://nghttp2.org/httpbin',
})

try {
	let [response] = await Promise.all([
		// httpbin.get('status/404', {
		// 	// timeout: Infinity,
		// }),
		httpbin.get('delay/3', {
			timeout: 2000,
		}),
		// ky('https://nghttp2.org/httpbin/delay/3', {
		// 	throwHttpErrors: false,
		// 	timeout: 2000,
		// }),
	])
	console.log('response ->', response)
	console.log('response.json() ->', await response.json())
} catch (error) {
	console.error('httpbin catch ->', error)
	if (error instanceof DOMException) {
		console.warn('AbortError ->')
		console.log('error.code ->', error.code)
		console.log('error.input ->', error.input)
	}
	console.log('error.name ->', error.name)
	console.log('error.constructor.name ->', error.constructor.name)
	console.log('what.getType(error) ->', what.getType(error))
	console.log('Reflect.ownKeys(error) ->', Reflect.ownKeys(error))
}
