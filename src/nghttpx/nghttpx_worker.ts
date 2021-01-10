await import('../devops/console.ts')
import * as async from 'https://deno.land/std/async/mod.ts'
import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as io from 'https://deno.land/std/io/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

let root_path = Deno.env.get('ROOT_PATH') as string
let config_path = path.join(root_path, 'configs', 'nghttpx.dev.conf')
const exec = Deno.run({
	cmd: ['nghttpx', '--conf', config_path],
	stdout: 'piped',
	stderr: 'piped',
})

exec.status().then((status) => self.postMessage({ status }))

let mux = new async.MuxAsyncIterator<string>()
mux.add(io.readLines(exec.stdout))
mux.add(io.readLines(exec.stderr))
for await (let chunk of mux) {
	// if (chunk.startsWith('{')) {
	// 	self.postMessage({ chunk: JSON.parse(chunk) })
	// 	continue
	// }
	self.postMessage({ chunk })
}

// Promise.all([
// 	(async function stdout() {
// 		for await (let chunk of io.readLines(exec.stdout)) {
// 			console.log('stdout ->', chunk)
// 			// self.postMessage({ chunk })
// 		}
// 	})(),
// 	(async function stderr() {
// 		for await (let chunk of io.readLines(exec.stderr)) {
// 			console.log('stderr ->', chunk)
// 			// self.postMessage({ chunk })
// 		}
// 	})(),
// ])

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
