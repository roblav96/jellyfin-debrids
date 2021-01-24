await import('../devops/console.ts')
import * as io from 'https://deno.land/std/io/mod.ts'

// console.log('graylog_worker Deno.env ->', Deno.env.toObject())

const listener = Deno.listen({
	hostname: '127.0.0.1',
	port: parseInt(Deno.env.get('GRAYLOG_PORT') || '18066'),
	transport: 'tcp',
})
queueMicrotask(async () => {
	console.info('graylog_worker listening ->', listener.addr)
	for await (let conn of listener) onconn(conn)
})

async function onconn(conn: Deno.Conn) {
	try {
		console.info('graylog_worker conn ->', conn.remoteAddr)
		for await (let chunk of io.readStringDelim(conn, '\x00')) {
			try {
				onchunk(JSON.parse(chunk))
			} catch (error) {
				console.error('graylog_worker parse chunk ->', chunk, error)
			}
		}
	} catch (error) {
		console.error('graylog_worker onconn ->', error)
	} finally {
		console.warn('graylog_worker conn close ->', conn.remoteAddr)
		conn.close()
	}
}

function onchunk(chunk: GraylogChunk) {
	console.log('chunk ->', chunk)
}

declare var self: Omit<DedicatedWorkerGlobalScope, 'postMessage'> & {
	postMessage: (chunk: Partial<GraylogChunk>) => void
}

// export interface GraylogChunk extends Record<string, string | number> {
export interface GraylogChunk {
	_message_template: string
	_SourceContext: string
	_Type: string
	_stringLevel: string
	_ThreadId: number
	facility: string
	full_message: string
	host: string
	level: number
	short_message: string
	timestamp: number
	version: string
}

// queueMicrotask(async () => {
// 	let listener!: Deno.Listener
// 	try {
// 		listener = Deno.listen({
// 			hostname: '127.0.0.1',
// 			port: parseInt(Deno.env.get('GRAYLOG_PORT') || '18066'),
// 			transport: 'tcp',
// 		})
// 		console.info('graylog_worker listening ->', listener.addr)
// 		for await (let conn of listener) onconn(conn)
// 	} catch (error) {
// 		console.error('graylog_worker listener ->', error)
// 	} finally {
// 		console.warn('graylog_worker closing ->', listener.addr)
// 		listener?.close()
// 		self.close()
// 	}
// })
