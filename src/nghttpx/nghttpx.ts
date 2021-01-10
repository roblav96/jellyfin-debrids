import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as io from 'https://deno.land/std/io/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

let worker = new Worker(new URL('nghttpx_worker.ts', import.meta.url).href, {
	deno: { namespace: true, permissions: 'inherit' },
	name: 'nghttpx_worker.ts',
	type: 'module',
})

worker.addEventListener('message', function onNghttpxMessage(event) {
	if (event?.data?.chunk) {
		console.log('event.data.chunk ->', event.data.chunk)
	} else {
		console.log('nghttpx_worker event ->', event.data)
	}
})

worker.addEventListener('error', function onNghttpxError(event) {
	console.error('nghttpx_worker error ->', event.message)
})
