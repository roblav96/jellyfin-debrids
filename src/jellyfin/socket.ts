import * as ENV from '../config/env.ts'
import * as jellyfin from './jellyfin.ts'
import Emittery from 'https://esm.sh/emittery?dev'
import { Sockette } from '../shims/sockette.ts'

export interface SocketEvent<T = any> {
	Data: T
	MessageId: string
	MessageType: string
	ServerId: string
}

const Events = {
	ActivityLogEntry: [] as jellyfin.Schemas.ActivityLogEntry[],
	message: {} as SocketEvent,
	ScheduledTasksInfo: [] as jellyfin.Schemas.TaskInfo[],
	Sessions: [] as jellyfin.Schemas.SessionInfo[],
}
export const ee = new Emittery<typeof Events>()

let socket: Sockette<SocketEvent>
setInterval(() => {
	try {
		socket?.json({ MessageType: 'KeepAlive' })
	} catch {}
}, 10000)

export function start({ LocalAddress, Id }: jellyfin.Schemas.PublicSystemInfo) {
	socket?.close()
	let url = new URL(`${LocalAddress.replace('http', 'ws')}/socket`)
	url.searchParams.set('api_key', ENV.get('JELLYFIN_API_KEY')!)
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
			socket.json({ MessageType: 'ActivityLogEntryStart', Data: '0,1000' })
			socket.json({ MessageType: 'ScheduledTasksInfoStart', Data: '0,1000' })
			socket.json({ MessageType: 'SessionsStart', Data: '0,1000' })
		},
		onmessage({ data }) {
			try {
				data = JSON.parse(data as any)
				if (data.MessageType == 'KeepAlive') return
				if (data.MessageType == 'ForceKeepAlive') return
				if (data.MessageType in Events) {
					ee.emit(data.MessageType as any, data.Data)
				} else {
					ee.emit('message', data)
				}
			} catch (error) {
				console.error('socket message ->', error)
			}
		},
	})
}

ee.onAny((event, data) => {
	console.log(`socket '${event}' ->`, data)
})
