import * as path from 'https://deno.land/std/path/mod.ts'
import * as Rx from '../shims/rxjs.ts'
import RunCmdWorker from '../workers/RunCmdWorker.ts'

let root_path = Deno.env.get('ROOT_PATH')!
let config_path = path.join(root_path, 'configs', 'nghttpx.dev.conf')
const worker = new RunCmdWorker(
	['nghttpx', `--conf=${config_path}`, `--workers=${Deno.systemCpuInfo().cores}`],
	'\n',
)

export const rxNghttpx = worker.rx.pipe(
	// Rx.op.tap((chunk) => console.log('rxNghttpx chunk ->', chunk)),
	Rx.op.map((chunk) => {
		return {
			message: chunk.slice(chunk.indexOf(' ') + 1),
			stamp: new Date(chunk.slice(0, chunk.indexOf(' '))).valueOf(),
		}
	}),
	// Rx.op.tap((line) => console.log('nghttpx line ->', line)),
	Rx.op.share(),
)

export const rxRequest = rxNghttpx.pipe(
	Rx.op.filter((line) => line.message.startsWith('{')),
	Rx.op.map((line) => {
		let request = {} as NghttpxRequest
		try {
			request = JSON.parse(line.message.replace(/\\x22/g, '\\"'))
			request.method &&= request.method.trim()
			request.backend_port &&= parseInt(request.backend_port as any)
			request.body_bytes_sent &&= parseInt(request.body_bytes_sent as any)
			request.remote_port &&= parseInt(request.remote_port as any)
			request.server_port &&= parseInt(request.server_port as any)
			request.status &&= parseInt(request.status as any)
			for (let key in request) {
				let value = (request as any)[key] as string
				if (value == '-') {
					delete (request as any)[key]
				}
			}
		} catch (error) {
			console.error('rxRequest ->', error)
		}
		return { ...request, stamp: line.stamp }
	}),
	Rx.op.filter((request) => Object.keys(request).length > 1),
)

export const rxError = rxNghttpx.pipe(
	Rx.op.filter((line) => !line.message.startsWith('{')),
	Rx.op.map((line) => {
		let error = {} as NghttpxError
		try {
			let regex = /^(?<master_pid>\d+) (?<current_pid>\d+) (?<thread_id>.+) (?<level>\w+) \((?<source>.+)\) (?<msg>.+)/
			error = line.message.match(regex)!.groups! as any
			error.current_pid &&= parseInt(error.current_pid as any)
			error.master_pid &&= parseInt(error.master_pid as any)
		} catch (error) {
			console.error('rxError -> %O', error)
		}
		return { ...error, stamp: line.stamp }
	}),
	Rx.op.filter((request) => Object.keys(request).length > 1),
)

export interface NghttpxRequest {
	backend_host: string
	backend_port: number
	body_bytes_sent: number
	http_host: string
	http_referer: string
	http_user_agent: string
	http_x_emby_authorization: string
	method: string
	path: string
	remote_addr: string
	remote_port: number
	server_port: number
	status: number
}
export interface NghttpxError {
	current_pid: number
	level: string
	master_pid: number
	msg: string
	source: string
	thread_id: string
}

// let worker = new Worker(new URL('nghttpx_worker.ts', import.meta.url).href, {
// 	deno: { namespace: true, permissions: 'inherit' },
// 	name: 'nghttpx_worker',
// 	type: 'module',
// })

// worker.addEventListener('message', function onNghttpxMessage(event) {
// 	let chunk = event?.data?.chunk as string
// 	if (!chunk) {
// 		return console.log('nghttpx_worker event ->', event.data)
// 	}
// 	if (!chunk.startsWith('{')) {
// 		return console.log('nghttpx_worker chunk ->', chunk)
// 	}
// 	try {
// 		chunk = chunk.replace(/\\x22/g, '\\"')
// 		let json = JSON.parse(chunk)
// 		console.log('chunk json ->', json)
// 	} catch (error) {
// 		console.error('chunk error ->', error, chunk)
// 	}
// })

// worker.addEventListener('error', function onNghttpxError(event) {
// 	console.error('nghttpx_worker error ->', event.message)
// })
