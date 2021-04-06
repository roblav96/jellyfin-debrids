import '../devops/console.ts'
import * as poly from '../poly/poly.ts'
import * as what from 'https://deno.land/x/is_what/src/index.ts'
import Db from './storage.ts'
// import ky, { KyOptions, KyResponsePromise } from '../shims/ky.ts'
import { Http, HttpError } from './http.ts'

const db = new Db(import.meta.url)
const httpbin = new Http({
	prefixUrl: 'https://nghttp2.org/httpbin',
})

try {
	let [response] = await Promise.all([
		// httpbin.get('status/404', {
		// 	// timeout: Infinity,
		// }),
		// new Http().get('https://snowfl.com/b.min.js', {
		// new Http().get('https://www.google.com', {
		// new Http().get('https://github.com', {
		// new Http().get('https://www.limetorrents.info/search/all/ubuntu/', {
		// new Http().get('https://linkedin.com', {
		// httpbin.json('anything', {
		// httpbin.json('delay/3', {
		httpbin.json('bearer', {
			// httpbin.json('anything', {
			// multipart: { 'magnets[]': ['hai', 'bai'] },
			// qsArrayBracket: true,
			// searchParams: { 'magnets[]': ['bai', 'hai'] },
			// memoize: new Date(0).setMinutes(1),
			// cookies: true,
			retries: 0,
			timeout: 1000,
		}),
		// ky('https://nghttp2.org/httpbin/delay/3', {
		// 	throwHttpErrors: false,
		// 	timeout: 2000,
		// }),
	])
	console.log('response ->', response)
	// console.log('response.json() ->', await response.json())
} catch (error) {
	console.error('httpbin catch ->', error)
	// console.log('poly.O.allEntries(error) ->', Object.fromEntries(poly.O.allEntries(error)))
	if (error instanceof DOMException) {
		console.warn('instanceof DOMException ->')
		console.log('error.name ->', error.name)
		console.log('error.code ->', error.code)
		console.log('Object.keys(error) ->', Object.keys(error))
		console.log('Object.getOwnPropertyDescriptors(error) ->', Object.getOwnPropertyDescriptors(error))
	}
	// console.log('error.name ->', error.name)
	// console.log('error.constructor.name ->', error.constructor.name)
	// console.log('error.message ->', error.message)
	// console.log('what.getType(error) ->', what.getType(error))
}
