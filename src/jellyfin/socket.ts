import * as jellyfin from './jellyfin.ts'
import * as qs from 'https://deno.land/std/node/querystring.ts'
import * as R from '../shims/rambdax.ts'
import * as Rx from '../shims/rxjs.ts'

// import Sockette from './shims/sockette.ts'
// console.log('Sockette ->', Sockette)
// let socket = new Sockette('', {})
// console.log('socket ->', socket)

export interface SocketEvent<T = any> {
	Data: T
	MessageId: string
	MessageType: string
	ServerId: string
}
export const rxSocket = new Rx.Subject<SocketEvent>()

let query = qs.stringify({
	api_key: Deno.env.get('API_KEY')!,
	deviceId: (await jellyfin.SystemInfoPublic()).Id,
})
const socket = new WebSocket(`ws://127.0.0.1:18096/socket?${query}`)
socket.addEventListener('error', (event) => {
	console.error('socket error ->', (event as ErrorEvent).message)
})
socket.addEventListener('close', (event) => {
	console.warn('socket close ->', event.code, event.reason)
})
socket.addEventListener('open', (event) => {
	// socket.send(JSON.stringify({ MessageType: 'ScheduledTasksInfoStart', Data: '0,1000' }))
	socket.send(JSON.stringify({ MessageType: 'SessionsStart', Data: '0,1500' }))
	// socket.send(JSON.stringify({ MessageType: 'ActivityLogEntryStart', Data: '0,1000' }))
})
socket.addEventListener('message', (event) => {
	try {
		let data = JSON.parse(event.data) as SocketEvent
		if (data.MessageType == 'KeepAlive') return
		if (data.MessageType == 'ForceKeepAlive') {
			return ForceKeepAlive()
		}
		rxSocket.next(data)
	} catch (error) {
		console.error('socket message ->', error)
	}
})

const ForceKeepAlive = R.once(() =>
	setInterval(() => socket.send(JSON.stringify({ MessageType: 'KeepAlive' })), 10000),
)

// rxSocket.subscribe((data) => {
// 	console.log('data ->', data)
// })
