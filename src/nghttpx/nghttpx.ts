import * as cases from 'https://esm.sh/change-case?dev'
import * as path from 'https://deno.land/std/path/mod.ts'
import * as qs from 'https://deno.land/std/node/querystring.ts'
import * as Rx from '../shims/rxjs.ts'
import RunCmdWorker from '../workers/RunCmdWorker.ts'
import { upperCaseFirst } from 'https://esm.sh/upper-case-first?dev'

let root_path = Deno.env.get('ROOT_PATH')!
let config_path = path.join(root_path, 'configs', 'nghttpx.dev.conf')
export const worker = new RunCmdWorker(
	['nghttpx', `--conf=${config_path}`, `--workers=${Deno.systemCpuInfo().cores}`],
	['}\n', '\n'],
)

export const rxNghttpx = worker.rx.pipe(
	// Rx.op.tap((chunk) => console.log('rxNghttpx chunk ->', chunk)),
	Rx.op.map((chunk) => {
		let message = chunk.slice(chunk.indexOf(' ') + 1)
		if (message.startsWith('{')) {
			message = `${message}}`
		}
		return {
			message,
			stamp: new Date(chunk.slice(0, chunk.indexOf(' '))).valueOf(),
		}
	}),
	// Rx.op.tap((line) => console.log('nghttpx line ->', line.message)),
	Rx.op.share(),
)

export const rxAccess = rxNghttpx.pipe(
	Rx.op.filter((line) => line.message.startsWith('{')),
	Rx.op.map((line) => {
		let access = {} as {
			backend_host: string
			backend_port: number
			body_bytes_sent: number
			http_host: string
			http_referer: string
			http_user_agent: string
			http_x_emby_authorization: string
			method: 'GET' | 'POST' | 'PUT' | 'DELETE'
			path: string
			remote_addr: string
			remote_port: number
			server_port: number
			status: number
		}
		try {
			access = JSON.parse(line.message.replace(/\\x22/g, '\\"'))
			access.method &&= access.method.trim() as any
			for (let key in access) {
				let value = (access as any)[key] as string
				if (value == '-') {
					delete (access as any)[key]
				}
			}
			access.backend_port &&= parseInt(access.backend_port as any)
			access.body_bytes_sent &&= parseInt(access.body_bytes_sent as any)
			access.remote_port &&= parseInt(access.remote_port as any)
			access.server_port &&= parseInt(access.server_port as any)
			access.status &&= parseInt(access.status as any)
		} catch (error) {
			console.error('rxAccess line.message ->', line.message)
			console.error('rxAccess ->', error)
		}
		return { ...access, stamp: line.stamp }
	}),
	Rx.op.filter((access) => !!access.path),
	Rx.op.share(),
)

export const rxError = rxNghttpx.pipe(
	Rx.op.filter((line) => !line.message.startsWith('{')),
	Rx.op.map((line) => {
		let error = {} as {
			current_pid: number
			level: string
			master_pid: number
			message: string
			source: string
			thread_id: string
		}
		try {
			let regex = /^(?<master_pid>\d+) (?<current_pid>\d+) (?<thread_id>.+) (?<level>\w+) \((?<source>.+)\) (?<message>.+)/
			error = line.message.match(regex)!.groups! as any
			error.current_pid &&= parseInt(error.current_pid as any)
			error.master_pid &&= parseInt(error.master_pid as any)
		} catch (error) {
			console.error('rxError line.message ->', line.message)
			console.error('rxError ->', error)
		}
		return { ...error, stamp: line.stamp }
	}),
	Rx.op.filter((error) => !!error.level),
	Rx.op.share(),
)
rxError
	.pipe(Rx.op.filter((error) => ['ERROR', 'WARN'].includes(error.level)))
	.subscribe((error) => {
		console.error('rxError ->', error)
		throw new Error(error.message)
	})

const rxReady = new Rx.BehaviorSubject(false)
rxError
	.pipe(
		Rx.op.filter((line) => line.message.startsWith('Loading configuration')),
		Rx.op.take(1),
		Rx.op.delay(1000),
	)
	.subscribe(() => rxReady.next(true))
export async function run() {
	worker.run()
	await Rx.firstValueFrom(rxReady.pipe(Rx.op.filter((ready) => ready == true)))
}

export const rxHttp = rxAccess.pipe(
	Rx.op.filter(({ path }) => {
		if (path.startsWith('/api-docs')) return false
		if (path.startsWith('/web')) return false
		if (path.endsWith('.js')) return false
		return true
	}),
	Rx.op.map((access) => {
		let [path, params] = access.path.split('?')
		path = path.toLowerCase()
		let query = {} as Record<string, string>
		if (params) {
			query = Object.entries(qs.parse(params)).reduce((target, [key, value], index) => {
				return Object.assign(target, { [cases.pascalCase(key)]: value })
			}, query)
		}
		let parts = path.split('/').filter(Boolean)
		for (let i = 0; i < parts.length; i++) {
			let [part, next] = [parts[i], parts[i + 1]]
			if (!next) continue
			if (part == 'users' && next.length == 32) {
				query.UserId ??= next
			}
			if (!isNaN(next as any)) {
				query.ItemId ??= next
			}
		}
		return { method: access.method, path, query, useragent: access.http_user_agent }
	}),
	// Rx.op.tap((http) => console.log('rxHttp ->', http)),
	Rx.op.share(),
)
// rxHttp.subscribe((http) => {
// 	console.log('rxNghttpx http ->', http)
// })
