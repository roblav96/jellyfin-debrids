import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as io from 'https://deno.land/std/io/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

let worker = new Worker(new URL('nghttpx_worker.ts', import.meta.url).href, {
	deno: { namespace: true, permissions: 'inherit' },
	name: 'nghttpx_worker',
	type: 'module',
})

worker.addEventListener('message', function onNghttpxMessage(event) {
	let chunk = event?.data?.chunk as string
	if (!chunk) {
		return console.log('nghttpx_worker event ->', event.data)
	}
	if (!chunk.startsWith('{')) {
		return console.log('nghttpx_worker chunk ->', chunk)
	}
	try {
		chunk = chunk.replace(/\\x22/g, '\\"')
		let json = JSON.parse(chunk)
		console.log('chunk json ->', json)
	} catch (error) {
		console.error('chunk error ->', error, chunk)
	}
})

worker.addEventListener('error', function onNghttpxError(event) {
	console.error('nghttpx_worker error ->', event.message)
})
