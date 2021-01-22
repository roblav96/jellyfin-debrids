await import('../devops/console.ts')
import * as io from 'https://deno.land/std/io/mod.ts'

declare var postMessage: (message: Partial<GraylogMessage>) => void
declare var self: DedicatedWorkerGlobalScope & typeof globalThis

self.onerror = (error) => {
	console.error(`graylog_worker error ->`, error)
}

const listener = Deno.listen({
	hostname: '127.0.0.1',
	port: parseInt(Deno.env.get('GRAYLOG_PORT') || '18066'),
	transport: 'tcp',
})

queueMicrotask(async () => {
	console.info('Graylog listening ->', listener.addr)
	for await (let conn of listener)
		(async function genchunks(conn: Deno.Conn) {
			console.info('Graylog conn ->', conn.remoteAddr)
			try {
				for await (let chunk of io.readStringDelim(conn, '\x00')) {
					let message: GraylogMessage
					try {
						postMessage(JSON.parse(chunk))
					} catch (error) {
						console.error('Graylog parse chunk ->', chunk, error)
					}
				}
			} catch (error) {
				console.error('Graylog genchunks ->', error)
			} finally {
				console.warn('Graylog conn close ->', conn.remoteAddr)
				conn.close()
			}
		})(conn)
	console.warn('Graylog closing ->', listener.addr)
	listener.close()
	self.close()
})

async function genchunks(conn: Deno.Conn) {
	console.info('Graylog conn ->', conn.remoteAddr)
	try {
		for await (let chunk of io.readStringDelim(conn, '\x00')) {
			let message: GraylogMessage
			try {
				postMessage(JSON.parse(chunk))
			} catch (error) {
				console.error('Graylog parse chunk ->', chunk, error)
			}
		}
	} catch (error) {
		console.error('Graylog genchunks ->', error)
	} finally {
		console.warn('Graylog conn close ->', conn.remoteAddr)
		conn.close()
	}
}

export interface GraylogMessage extends Record<string, string | number> {
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
