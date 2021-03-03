import '../devops/console.ts'
import * as poly from '../poly/poly.ts'
import * as what from 'https://deno.land/x/is_what/src/index.ts'
import Db from './storage.ts'
import ky, { KyOptions, KyResponsePromise } from '../shims/ky.ts'
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
		// httpbin.text('anything', {
		httpbin.text('delay/3', {
			form: { hai: 'bai' },
			memoize: new Date(0).setMinutes(60),
			// cookies: true,
			timeout: 1000,
		}),
		// ky('https://nghttp2.org/httpbin/delay/3', {
		// 	throwHttpErrors: false,
		// 	timeout: 2000,
		// }),
	])
	console.log('response ->', what.getType(response), response)
	// console.log('response.json() ->', await response.json())
} catch (error) {
	console.error('httpbin catch ->', error)
	console.log('poly.obj.allKeys(error) ->', poly.obj.allKeys(error))
	if (error instanceof DOMException) {
		console.warn('instanceof DOMException ->')
		console.log('error.code ->', error.code)
	}
	console.log('error.name ->', error.name)
	console.log('error.constructor.name ->', error.constructor.name)
	console.log('error.message ->', error.message)
	console.log('what.getType(error) ->', what.getType(error))
}
