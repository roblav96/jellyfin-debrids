// import * as fs from 'https://deno.land/std/fs/mod.ts'
// import * as io from 'https://deno.land/std/io/mod.ts'
// import * as path from 'https://deno.land/std/path/mod.ts'
import * as Rx from '../shims/rxjs.ts'

export interface RunCmdMessage {
	chunk: string
	cmd: string[]
	delimiter: string
	status: Deno.ProcessStatus
	type: 'ready' | 'run' | 'status' | 'chunk'
}

export default class RunCmdWorker extends Worker {
	declare postMessage: (message: Partial<RunCmdMessage>) => void
	rx = new Rx.Subject<string>()

	constructor(public cmd: string[], public delimiter: string, public name = `${cmd[0]}_worker`) {
		super(new URL('run_cmd_worker.ts', import.meta.url).href, {
			deno: { namespace: true, permissions: 'inherit' },
			name: name,
			type: 'module',
		})

		this.addEventListener('error', function error(this: RunCmdWorker, event: ErrorEvent) {
			console.error(`${name} error ->`, event)
			this.rx.error(new Error(event.error))
		} as any)

		this.addEventListener('messageerror', function messageerror(
			this: RunCmdWorker,
			event: MessageEvent,
		) {
			console.error(`${name} messageerror ->`, event.data)
			this.rx.error(new Error(event.data))
		} as any)

		this.addEventListener('message', function message(
			this: RunCmdWorker,
			event: MessageEvent<RunCmdMessage>,
		) {
			if (event.data.type == 'ready') {
				return this.postMessage({ type: 'run', cmd, delimiter })
			}
			if (event.data.type == 'chunk') {
				// console.log(`${name} chunk ->`, event.data.chunk)
				return this.rx.next(event.data.chunk)
			}
			// console.log(`${name} message ->`, event.data)
		} as any)
	}
}
