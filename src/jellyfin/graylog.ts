import type { GraylogChunk } from '../workers/graylog_worker.ts'
import { EventEmitter } from 'https://deno.land/x/event/mod.ts'

export const ee = new EventEmitter<{
	chunk: [GraylogChunk]
}>()

const worker = new Worker(new URL('../workers/graylog_worker.ts', import.meta.url).href, {
	deno: { namespace: true, permissions: 'inherit' },
	name: 'graylog_worker',
	type: 'module',
})

worker.onerror = (event) => {
	console.error(`GraylogWorker onerror ->`, event.message)
}

worker.onmessageerror = (event) => {
	console.error(`GraylogWorker onmessageerror ->`, event.data)
}

worker.onmessage = (event: MessageEvent<GraylogChunk>) => {
	console.log(`GraylogWorker onmessage ->`, event.data)
}
