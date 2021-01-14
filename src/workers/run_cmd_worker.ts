// await import('../devops/console.ts')
import * as async from 'https://deno.land/std/async/mod.ts'
import * as io from 'https://deno.land/std/io/mod.ts'
import type { RunCmdMessage } from './RunCmdWorker.ts'

declare var postMessage: (message: Partial<RunCmdMessage>) => void

let proc: Deno.Process<{ cmd: string[]; stdout: 'piped'; stderr: 'piped' }>
onmessage = async function message(event: MessageEvent<RunCmdMessage>) {
	// console.log(`'${name}' event ->`, event)
	if (event.data.type != 'run') return
	if (!!proc) return
	proc = Deno.run({
		cmd: event.data.cmd,
		stdout: 'piped',
		stderr: 'piped',
	})
	proc.status().then((status) => postMessage({ type: 'status', status }))
	let mux = new async.MuxAsyncIterator<string>()
	mux.add(io.readStringDelim(proc.stdout, event.data.delimiter))
	mux.add(io.readStringDelim(proc.stderr, event.data.delimiter))
	for await (let chunk of mux) {
		if (chunk.endsWith('\r')) {
			chunk = chunk.slice(0, -1)
		}
		postMessage({ type: 'chunk', chunk })
	}
}
postMessage({ type: 'ready' })

// self.onerror = function onerror(event) {
// 	console.error(`run_cmd_worker ${self.name} error ->`, event)
// }
// self.addEventListener('error', function error(event: ErrorEvent) {
// 	console.log('typeof event ->', typeof event)
// 	event.preventDefault()
// 	console.error(`run_cmd_worker ${self.name} error ->`, event)
// })

// let promise = new Promise((resolve, reject) => {
// 	self.onmessage = function onmessage(event: MessageEvent<RunCmdMessage>) {
// 		console.log('event ->', event)
// 		if (event.data.type == 'run') {
// 			resolve(event.data)
// 		}
// 	}
// })
// // self.postMessage({ type: 'ready' } as RunCmdMessage)
// let run = await promise
// console.log('run ->', run)

// import pEvent from 'https://esm.sh/p-event?dev'
// let runargs = await pEvent(self)
// console.log('runargs ->', runargs)

// await new Promise((resolve, reject) => {
// 	self.onmessage = function (event) {
// 		console.log('event ->', event)
// 	}
// })

// const exec = Deno.run({
// 	cmd: ['jellyfin', '--service'],
// 	stdout: 'piped',
// 	stderr: 'piped',
// })

// exec.status().then((status) => self.postMessage({ status }))

// let mux = new async.MuxAsyncIterator<string>()
// mux.add(io.readStringDelim(exec.stdout, '\n\n'))
// mux.add(io.readStringDelim(exec.stderr, '\n\n'))
// for await (let chunk of mux) {
// 	// if (!chunk.startsWith('[')) {
// 	// 	chunk = `[${chunk}`
// 	// }
// 	if (chunk.startsWith('\n')) {
// 		chunk = chunk.slice(1)
// 	}
// 	if (chunk.endsWith('\r')) {
// 		chunk = chunk.slice(0, -1)
// 	}
// 	self.postMessage({ chunk })
// }
