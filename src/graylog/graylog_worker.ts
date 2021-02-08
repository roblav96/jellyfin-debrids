import '../devops/console.ts'
import * as io from 'https://deno.land/std/io/mod.ts'

const listener = Deno.listen({
	hostname: '127.0.0.1',
	port: Number(Deno.env.get('JELLYFIN_GRAYLOG_PORT') ?? '18066'),
	transport: 'tcp',
})

try {
	console.info('graylog_worker listening ->', listener.addr)
	for await (const conn of listener) onconn(conn)
} catch (error) {
	console.error('graylog_worker listener ->', error)
} finally {
	console.warn('graylog_worker listener close ->', listener.addr)
	listener.close()
}

async function onconn(conn: Deno.Conn) {
	try {
		console.info('graylog_worker conn ->', conn.remoteAddr)
		for await (let chunk of io.readStringDelim(conn, '\x00')) {
			if (chunk == '') continue
			try {
				postMessage(onchunk(JSON.parse(chunk)) as GraylogMessage)
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
	// console.log('chunk ->', chunk)
	let message = {
		context: chunk._SourceContext,
		event: chunk['_EventId.Name'],
		level: chunk._stringLevel,
		line: chunk.full_message || chunk.short_message,
		template: chunk._message_template,
		timestamp: chunk.timestamp,
	}
	for (let key in chunk) {
		// prettier-ignore
		if ((['_EventId.Id', '_EventId.Name', '_SourceContext', '_ThreadId', '_message_template', '_stringLevel', 'facility', 'full_message', 'host', 'level', 'short_message', 'timestamp', 'version'] as (keyof GraylogChunk)[]).includes(key as never)) {
			continue
		}
		let value = chunk[key as never]
		if (value === '' || value === null || value === undefined) {
			continue
		}
		key.startsWith('_') && (key = key.slice(1))
		key.includes('.') && (key = key.replace('.', ''))
		key.includes('-') && (key = key.replace('-', ''))
		message[key as never] = value as never
	}
	// console.log('message ->', message)
	return message
}

export type GraylogMessage = ReturnType<typeof onchunk> & { [key: string]: string }
declare function postMessage(message: GraylogMessage): void

interface GraylogChunk {
	'_EventId.Name': string
	'_EventId.Id': string
	'_message_template': string
	'_SourceContext': string
	'_stringLevel': 'Debug' | 'Error' | 'Fatal' | 'Information' | 'Verbose' | 'Warning'
	'_ThreadId': number
	'facility': string
	'full_message': string
	'host': string
	'level': number
	'short_message': string
	'timestamp': number
	'version': string
}
