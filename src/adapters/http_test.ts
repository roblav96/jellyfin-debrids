import '../devops/console.ts'
import ky, { KyOptions, KyResponsePromise } from '../shims/ky.ts'
import { Db } from './storage.ts'
import { Http } from './http.ts'

const db = Db.fromUrl(import.meta.url)
const httpbin = new Http({
	prefixUrl: 'https://user:pass@nghttp2.org/httpbin',
})

try {
	// console.log('try ->', Deno.resources())
	let [response] = await Promise.all([
		httpbin.get('#delay', {
			timeout: 2000,
		}),
		// ky('https://nghttp2.org/httpbin/delay/3', {
		// 	throwHttpErrors: false,
		// 	timeout: 2000,
		// }),
		// setTimeout(() => console.log('Promise.all ->', Deno.resources()), 1000)
	])
	console.log('response ->', Deno.resources())
	// Deno.close(4)
	console.log('response ->', response)
	console.log('response.json() ->', await response.json())
	console.log('json ->', Deno.resources())
} catch (error) {
	console.error('catch ->', error)
} finally {
	// console.log('finally ->', Deno.resources())
}
