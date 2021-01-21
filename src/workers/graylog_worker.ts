await import('../devops/console.ts')
import * as async from 'https://deno.land/std/async/mod.ts'
import * as io from 'https://deno.land/std/io/mod.ts'

declare var postMessage: (message: Partial<GraylogMessage>) => void
declare var self: DedicatedWorkerGlobalScope & typeof globalThis

console.log('Symbol("events.errorMonitor") ->', Symbol("events.errorMonitor"))

const listener = Deno.listen({
	hostname: '127.0.0.1',
	port: parseInt(Deno.env.get('GRAYLOG_PORT') || '18066'),
	transport: 'tcp',
})

function unload() {
	console.warn('Graylog closing rid ->', listener.rid)
	listener.close()
	Deno.close(listener.rid)
}

queueMicrotask(async () => {
	window.addEventListener('unload', () => listener.close())
	console.info('Graylog listening ->', listener.addr)
	for await (let conn of listener) genchunks(conn)

})

async function genchunks(conn: Deno.Conn) {
	console.info('conn ->', conn.remoteAddr)
	try {
		for await (let chunk of io.readStringDelim(conn, '\x00')) {
			console.log('chunk ->', chunk.length)
			let message = JSON.parse(chunk) as GraylogMessage
		}
	} catch (error) {
		console.error('genchunks ->', error)
	} finally {
		console.warn('conn close ->', conn.remoteAddr)
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
