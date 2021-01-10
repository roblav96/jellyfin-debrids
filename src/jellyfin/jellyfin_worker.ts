await import('../devops/console.ts')
import * as async from 'https://deno.land/std/async/mod.ts'
import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as io from 'https://deno.land/std/io/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

const exec = Deno.run({
	cmd: ['jellyfin', '--service'],
	stdout: 'piped',
	stderr: 'piped',
})

exec.status().then((status) => self.postMessage({ status }))

let mux = new async.MuxAsyncIterator<string>()
mux.add(io.readStringDelim(exec.stdout, '\n\n'))
mux.add(io.readStringDelim(exec.stderr, '\n\n'))
for await (let chunk of mux) {
	// if (!chunk.startsWith('[')) {
	// 	chunk = `[${chunk}`
	// }
	if (chunk.startsWith('\n')) {
		chunk = chunk.slice(1)
	}
	if (chunk.endsWith('\r')) {
		chunk = chunk.slice(0, -1)
	}
	self.postMessage({ chunk })
}

// setInterval(Function, 1 << 30)

// self.onload = async function onload(event) {
// 	console.log('jellyfin_worker.ts onload ->', event)
// }
// self.onunload = async function onunload(event) {
// 	console.log('jellyfin_worker.ts onunload ->', event)
// }
// self.onmessage = async function onmessage(event) {
// 	console.log('jellyfin_worker.ts onmessage ->', event)
// }
// self.onerror = async function onerror(event) {
// 	console.error('jellyfin_worker.ts onerror ->', event)
// }
// self.onmessageerror = async function onmessageerror(event) {
// 	console.error('jellyfin_worker.ts onmessageerror ->', event)
// }

// self.addEventListener('load', async (event) => {
// 	console.log('jellyfin_worker.ts onload ->', event.type)
// })
// self.addEventListener('unload', async (event) => {
// 	console.log('jellyfin_worker.ts onunload ->', event.type)
// })
