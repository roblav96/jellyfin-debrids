import * as Rx from '../shims/rxjs.ts'
import type { GraylogMessage } from './graylog_worker.ts'

export const rx = new Rx.Subject<string>()
const worker = new Worker(new URL('graylog_worker.ts', import.meta.url).href, {
	deno: { namespace: true, permissions: 'inherit' },
	name: 'GraylogWorker',
	type: 'module',
})

worker.addEventListener('error', (event) => {
	console.error(`GraylogWorker error ->`, event)
	rx.error(new Error(event.message))
})

worker.addEventListener('messageerror', (event) => {
	console.error(`GraylogWorker messageerror ->`, event.data)
	rx.error(new Error(event.data))
})

worker.addEventListener('message', (event: MessageEvent<GraylogMessage>) => {
	console.log(`GraylogWorker message ->`, event.data)
})
