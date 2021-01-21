await import('../devops/console.ts')
import * as _io from 'https://deno.land/std/http/_io.ts'
import * as async from 'https://deno.land/std/async/mod.ts'
import * as http from 'https://deno.land/std/http/mod.ts'
import * as io from 'https://deno.land/std/io/mod.ts'
import * as R from '../shims/rambdax.ts'
import * as textproto from 'https://deno.land/std/textproto/mod.ts'
import * as utf8 from 'https://deno.land/std/encoding/utf8.ts'
import * as thenable from 'https://deno.land/x/thenable_generator/index.ts'

declare var postMessage: (message: Partial<GraylogMessage>) => void
declare var self: DedicatedWorkerGlobalScope & typeof globalThis

const listener = Deno.listen({
	hostname: '127.0.0.1',
	port: parseInt(Deno.env.get('GRAYLOG_PORT') || '18066'),
	transport: 'tcp',
})
queueMicrotask(async function onlisten() {
	for await (let conn of listener) genchunks(conn)
})

async function genchunks(conn: Deno.Conn) {
	console.info('conn ->', conn.remoteAddr)
	// let reader = io.BufReader.create(conn)
	// mux.add(io.readStringDelim(reader, '\x00'))
	// console.log('mux ->', mux)
	for await (let chunk of io.readStringDelim(conn, '\x00')) {
		// console.log('chunk ->', chunk.length)
		// for await (let chunk of io.readStringDelim(reader, '\x00')) {
		// console.log('message ->', message)
	}
	console.warn('conn close ->', conn.remoteAddr)
	conn.close()
}

// console.log('mux ->', mux)
// for await (let chunk of mux) {
// 	console.log('chunk ->', chunk)
// }

// async function* genchunks(listener: Deno.Listener) {
// 	console.info('listener ->', listener.addr)
// 	for await (let conn of listener) {
// 		console.info('conn ->', conn.remoteAddr)
// 		let reader = io.BufReader.create(conn, 8192)
// 		yield* io.readStringDelim(reader, '\x00')
// 		// let read = await Deno.readAll(conn)
// 		// yield* Deno.iter(conn, { bufSize: 128 })
// 		// let buf = new Uint8Array(8192)
// 		// let read = await conn.read(buf)
// 		// yield read
// 		console.warn('conn close ->', conn.remoteAddr)
// 		conn.close()
// 	}
// 	console.error('listener close ->', listener.addr)
// 	return listener.close()
// }
// for await (let chunk of genchunks(listener)) {
// 	console.log('chunk ->', chunk)
// }

// async function onconn(conn: Deno.Conn) {
// 	console.info('handle conn ->', conn.remoteAddr)
// 	// let reader = io.BufReader.create(conn, 8192)
// 	for await (let chunk of io.readStringDelim(conn, '\x00')) {
// 		try {
// 			// console.log('chunk.length ->', chunk.length)
// 			// let message = JSON.parse(chunk) as GraylogMessage
// 			// console.log('message ->', message)
// 		} catch (error) {
// 			console.error('Graylog chunk ->', chunk, error)
// 		}
// 	}
// 	console.warn('handle close ->', conn.remoteAddr)
// 	conn.close()
// }

// for await (let conn of listener) {

// 	// let reader = io.BufReader.create(conn, 8192)
// 	// io.readStringDelim(conn, '\x00')[Symbol.asyncIterator]()
// 	// ;(async function handle(conn: Deno.Conn) {
// 	// 	console.info('handle conn ->', conn.remoteAddr)
// 	// 	// let reader = io.BufReader.create(conn, 8192)
// 	// 	for await (let chunk of io.readStringDelim(conn, '\x00')) {
// 	// 		try {
// 	// 			// console.log('chunk.length ->', chunk.length)
// 	// 			// let message = JSON.parse(chunk) as GraylogMessage
// 	// 			// console.log('message ->', message)
// 	// 		} catch (error) {
// 	// 			console.error('Graylog chunk ->', chunk, error)
// 	// 		}
// 	// 	}
// 	// 	console.warn('handle close ->', conn.remoteAddr)
// 	// 	conn.close()
// 	// })(conn)
// 	// let reader = io.BufReader.create(conn, 8192)
// 	// mux.add(io.readStringDelim(conn, '\x00'))
// 	// console.warn('conn.close() ->')
// 	// conn.close()
// }

// queueMicrotask(async function onconnections() {
// 	for await (let conn of listener) {
// 		let reader = new io.BufReader(conn)
// 		mux.add(io.readStringDelim(conn, '\x00'))
// 		console.warn('conn.close() ->')
// 		conn.close()
// 	}
// })
// for await (let chunk of mux) {
// 	let message = utf8.decode(chunk)
// 	console.log('message ->', message)
// }

// for await (let conn of listener) {
// 	await handle(conn)
// 	// console.info('listener connection ->', conn.remoteAddr)

// 	// // let reader = io.BufReader.create(conn, 8192)
// 	// for await (let chunk of io.readStringDelim(conn, '\x00')) {
// 	// 	try {
// 	// 		// console.log('chunk.length ->', chunk.length)
// 	// 		// let message = JSON.parse(chunk) as GraylogMessage
// 	// 		// console.log('message ->', message)
// 	// 	} catch (error) {
// 	// 		console.error('Graylog listener ->', chunk, error)
// 	// 	}
// 	// }

// 	// for await (let chunk of Deno.iter(conn, { bufSize: 8192 })) {
// 	// 	let message = utf8.decode(chunk)
// 	// 	console.log('message ->', message)
// 	// }

// 	// console.warn('connection close ->', conn.remoteAddr)
// 	// conn.close()
// 	// Deno.close(conn.rid)
// }

//

// const server = http.serve({
// 	hostname: '127.0.0.1',
// 	port: parseInt(Deno.env.get('GRAYLOG_PORT') || '18066'),
// })
// for await (let request of server) {
// 	console.log('request ->', request)
// 	try {
// 		let message = JSON.parse(utf8.decode(await Deno.readAll(request.body))) as GraylogMessage
// 		console.log('message ->')
// 	} catch (error) {
// 		console.error('Graylog request ->', error)
// 	} finally {
// 		await request.respond({ body: 'ok', status: 200 })
// 	}
// }

interface GraylogMessage extends Record<string, string | number> {
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

// interface Message extends Record<string, string | number> {
// 	'Accept': string
// 	'Accept-Ranges': string
// 	'AcceptHeader': string
// 	'Args': string
// 	'Codecs': string
// 	'Connection': string
// 	'Content-Length': string
// 	'Content-Type': string
// 	'Date': string
// 	'EnvVars': string
// 	'ETag': string
// 	'ExplicitContentTypes': string
// 	'facility': string
// 	'Filters': string
// 	'host': string
// 	'Last-Modified': string
// 	'level': number
// 	'ModelBinderProviders': string
// 	'OutputFormatters': string
// 	'Scope': string
// 	'Server': string
// 	'short_message': string
// 	'timestamp': number
// 	'Types': string
// 	'User-Agent': string
// 	'version': string
// }

// interface FullMessage extends Record<string, string | number> {
// 	'_0': string
// 	'_1': number
// 	'_2': number
// 	'_3': number
// 	'_4': number
// 	'_5': number
// 	'_ActionId': string
// 	'_ActionName': string
// 	'_ActionResult': string
// 	'_ApplicationPath': string
// 	'_Architecture': number
// 	'_Arguments': string
// 	'_assemblyName': string
// 	'_AssemblyName': string
// 	'_AuthenticationScheme': string
// 	'_CandidateCount': number
// 	'_Codec': string
// 	'_ConnectionId': string
// 	'_ContentLength': string
// 	'_ContentType': string
// 	'_Controller': string
// 	'_DueTime': string
// 	'_Elapsed': string
// 	'_ElapsedMilliseconds': number
// 	'_ElapsedMs': number
// 	'_EncoderLocation': number
// 	'_Endpoint': string
// 	'_EndpointName': string
// 	'_EventId.Id': number
// 	'_EventId.Name': string
// 	'_ExceptionMessage': string
// 	'_ExceptionSource': string
// 	'_ExceptionType': string
// 	'_ExpirationDate': string
// 	'_FfmpegPath': string
// 	'_Filter': string
// 	'_FilterType': string
// 	'_folder': string
// 	'_FromType': string
// 	'_FullName': string
// 	'_FullPath': string
// 	'_Handler': string
// 	'_HaveSource': string
// 	'_header': string
// 	'_Host': string
// 	'_HostingRequestFinishedLog': string
// 	'_HostingRequestStartingLog': string
// 	'_HttpHeadersLogValue': string
// 	'_HttpMethod': string
// 	'_Is64Bit': string
// 	'_IsExternal': string
// 	'_IsUserInteractive': string
// 	'_KeyId': string
// 	'_message_template': string
// 	'_Method': string
// 	'_MethodInfo': string
// 	'_Name': string
// 	'_ObjectResultType': string
// 	'_origin': string
// 	'_OS': string
// 	'_Output': string
// 	'_OutputFormatter': string
// 	'_Path': string
// 	'_path': string
// 	'_PathBase': string
// 	'_PhysicalPath': string
// 	'_PluginName': string
// 	'_PluginVersion': string
// 	'_ProcessorCount': number
// 	'_ProgramDataPath': string
// 	'_Protocol': string
// 	'_provider': string
// 	'_Query': string
// 	'_QueryString': string
// 	'_RequestId': string
// 	'_RequestPath': string
// 	'_Result': string
// 	'_RouteData': string
// 	'_RoutePattern': string
// 	'_Scheme': string
// 	'_Source': string
// 	'_SourceContext': string
// 	'_StackTrace': string
// 	'_StatusCode': number
// 	'_stringLevel': string
// 	'_Task': string
// 	'_ThreadId': number
// 	'_Time': string
// 	'_Token': string
// 	'_ToType': string
// 	'_TriggerDate': string
// 	'_Type': string
// 	'_Uri': string
// 	'_ValidationState': number
// 	'_Version': string
// 	'_VirtualPath': string
// 	'_WebPath': string
// 	'Accept': string
// 	'Accept-Ranges': string
// 	'AcceptHeader': string
// 	'Args': string
// 	'Codecs': string
// 	'Connection': string
// 	'Content-Length': string
// 	'Content-Type': string
// 	'Date': string
// 	'EnvVars': string
// 	'ETag': string
// 	'ExplicitContentTypes': string
// 	'facility': string
// 	'Filters': string
// 	'full_message': string
// 	'host': string
// 	'Last-Modified': string
// 	'level': number
// 	'ModelBinderProviders': string
// 	'OutputFormatters': string
// 	'Scope': string
// 	'Server': string
// 	'short_message': string
// 	'timestamp': number
// 	'Types': string
// 	'User-Agent': string
// 	'version': string
// }

// const socket = Deno.listenDatagram({
// 	port: 18066,
// 	transport: 'udp',
// })
// for await (let [data, address] of socket) {
// 	console.log('address ->', address)
// 	console.log('data ->', data.toString())
// }
