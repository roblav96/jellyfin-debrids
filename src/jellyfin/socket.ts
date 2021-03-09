import * as ENV from '../config/env.ts'
import * as jellyfin from './jellyfin.ts'
import { EventEmitter } from 'https://deno.land/x/event/mod.ts'
import { Sockette } from '../shims/sockette.ts'

export interface SocketEvent<T = any> {
	Data: T
	MessageId: string
	MessageType: string
	ServerId: string
}
export const ee = new EventEmitter<{
	message: [SocketEvent]
}>()

let socket: Sockette<SocketEvent>
setInterval(() => {
	try {
		socket?.json({ MessageType: 'KeepAlive' })
	} catch {}
}, 10000)

export function start({ LocalAddress, Id }: jellyfin.Schemas.PublicSystemInfo) {
	socket?.close()
	let url = new URL(`${LocalAddress.replace('http', 'ws')}/socket`)
	url.searchParams.set('api_key', ENV.get('API_KEY')!)
	url.searchParams.set('deviceId', Id)
	socket = new Sockette<SocketEvent>(url.toString(), {
		timeout: 3000,
		onerror(event) {
			console.error('socket error ->', event.error)
		},
		onclose(event) {
			console.warn('socket close ->', event.code, event.reason)
		},
		onopen(event) {
			console.info('socket onopen ->', `${url.origin}/socket`)
			socket.json({ MessageType: 'SessionsStart', Data: '0,1500' })
		},
		onmessage({ data }) {
			try {
				data = JSON.parse(data as any)
				if (data.MessageType == 'KeepAlive') return
				if (data.MessageType == 'ForceKeepAlive') return
				ee.emit('message', data)
			} catch (error) {
				console.error('socket message ->', error)
			}
		},
	})
}

// ee.on('message', (message) => {
// 	console.log('message ->', message)
// })
