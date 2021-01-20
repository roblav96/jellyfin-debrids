await import('./devops/console.ts')
await import('./envs/dotenv.ts')
import * as Rx from './shims/rxjs.ts'

import Sockette from './shims/sockette.ts'
Sockette
console.log('Sockette ->', Sockette)
let socket = new Sockette('', {

})
console.log('socket ->', socket)

queueMicrotask(async function onload() {
	await (await import('./workers/jellyfin_worker.ts')).run()
	console.info('jellyfin ready')
	await (await import('./workers/nghttpx_worker.ts')).run()
	console.info('nghttpx ready')
	await import('./jellyfin/jellyfin.ts')
	await import('./jellyfin/socket.ts')
	await import('./jellyfin/search.ts')
})
