import * as Rx from '../shims/rxjs.ts'

export interface RunCmdMessage {
	action: 'ready' | 'run' | 'status' | 'chunk'
	chunk: string
	cmd: string[]
	delimiters: string[]
	status: Deno.ProcessStatus
}

export default class RunCmdWorker {
	rx = new Rx.Subject<string>()

	private worker!: Worker
	private get name() {
		return `${this.cmd[0]}_worker`
	}
	private postMessage(message: Partial<RunCmdMessage>) {
		this.worker.postMessage(message)
	}

	constructor(private cmd: string[], private delimiters: string[]) {}

	run() {
		if (this.worker) return

		this.worker = new Worker(new URL('run_cmd_worker.ts', import.meta.url).href, {
			deno: { namespace: true, permissions: 'inherit' },
			name: this.name,
			type: 'module',
		})

		this.worker.addEventListener('error', (event) => {
			console.error(`${this.name} error ->`, event.message)
			this.rx.error(new Error(event.message))
		})

		this.worker.addEventListener('messageerror', (event) => {
			console.error(`${this.name} messageerror ->`, event.data)
			this.rx.error(new Error(event.data))
		})

		this.worker.addEventListener('message', (event: MessageEvent<RunCmdMessage>) => {
			if (event.data.action == 'ready') {
				return this.postMessage({
					action: 'run',
					cmd: this.cmd,
					delimiters: this.delimiters,
				})
			}
			if (event.data.action == 'chunk') {
				// console.log(`${name} chunk ->`, event.data.chunk)
				return this.rx.next(event.data.chunk)
			}
			if (event.data.action == 'status') {
				console.error(`${this.name} status ->`, event.data.status)
				return this.rx.error(new Error(JSON.stringify(event.data.status)))
			}
			// console.log(`${name} message ->`, event.data)
		})
	}
}
