// await import('../devops/console.ts')
import * as async from 'https://deno.land/std/async/mod.ts'
import * as io from 'https://deno.land/std/io/mod.ts'
import type { RunCmdMessage } from './RunCmdWorker.ts'

declare var postMessage: (message: Partial<RunCmdMessage>) => void

let proc: Deno.Process<Deno.RunOptions & { stdout: 'piped'; stderr: 'piped' }>

self.onmessage = async (event: MessageEvent<RunCmdMessage>) => {
	// console.log(`'${name}' event ->`, event)
	if (proc || event.data.action != 'run') return

	proc = Deno.run({
		cmd: event.data.cmd,
		stdout: 'piped',
		stderr: 'piped',
	})

	proc.status().then((status) => postMessage({ action: 'status', status }))

	let mux = new async.MuxAsyncIterator<string>()
	mux.add(io.readStringDelim(proc.stdout, event.data.delimiter))
	mux.add(io.readStringDelim(proc.stderr, event.data.delimiter))
	for await (let chunk of mux) {
		if (chunk.endsWith('\r')) {
			chunk = chunk.slice(0, -1)
		}
		postMessage({ action: 'chunk', chunk })
	}
}

postMessage({ action: 'ready' })
