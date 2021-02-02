import * as jellyfin from './jellyfin.ts'
import * as qs from 'https://deno.land/std/node/querystring.ts'
import Sockette from '../shims/sockette.ts'
import { EventEmitter } from 'https://deno.land/x/event/mod.ts'

export interface SocketEvent<T = any> {
	Data: T
	MessageId: string
	MessageType: string
	ServerId: string
}
export const ee = new EventEmitter<{
	message: [SocketEvent]
}>()

let socket: InstanceType<typeof Sockette>
export function start(api_key: string, deviceId: string) {
	socket?.close()
	let query = qs.stringify({ api_key, deviceId })
	socket = new Sockette(`ws://127.0.0.1:8096/socket?${query}`, {
		onerror(event) {
			console.error('socket error ->', (event as ErrorEvent).message)
		},
		onclose(event) {
			console.warn('socket close ->', event.code, event.reason)
		},
		onopen(event) {
			socket.json({ MessageType: 'SessionsStart', Data: '0,1500' })
		},
		onmessage(event) {
			try {
				let data = JSON.parse(event.data) as SocketEvent
				if (data.MessageType == 'KeepAlive') return
				if (data.MessageType == 'ForceKeepAlive') return
				ee.emit('message', data)
			} catch (error) {
				console.error('socket message ->', error)
			}
		},
	})
}

setInterval(() => socket?.json({ MessageType: 'KeepAlive' }), 10000)

// let query = qs.stringify({
// 	api_key: Deno.env.get('API_KEY')!,
// 	deviceId: (await jellyfin.SystemInfoPublic()).Id,
// })
// const socket = new WebSocket(`ws://127.0.0.1:8096/socket?${query}`)
// socket.addEventListener('error', (event) => {
// 	console.error('socket error ->', (event as ErrorEvent).message)
// })
// socket.addEventListener('close', (event) => {
// 	console.warn('socket close ->', event.code, event.reason)
// })
// socket.addEventListener('open', (event) => {
// 	// socket.send(JSON.stringify({ MessageType: 'ScheduledTasksInfoStart', Data: '0,1000' }))
// 	socket.send(JSON.stringify({ MessageType: 'SessionsStart', Data: '0,1500' }))
// 	// socket.send(JSON.stringify({ MessageType: 'ActivityLogEntryStart', Data: '0,1000' }))
// })
// socket.addEventListener('message', (event) => {
// 	try {
// 		let data = JSON.parse(event.data) as SocketEvent
// 		if (data.MessageType == 'KeepAlive') return
// 		if (data.MessageType == 'ForceKeepAlive') {
// 			return ForceKeepAlive()
// 		}
// 		rxSocket.next(data)
// 	} catch (error) {
// 		console.error('socket message ->', error)
// 	}
// })
// const ForceKeepAlive = R.once(() =>
// 	setInterval(() => socket.send(JSON.stringify({ MessageType: 'KeepAlive' })), 10000),
// )

// rxSocket.subscribe((data) => {
// 	console.log('data ->', data)
// })
