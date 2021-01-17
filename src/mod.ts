await import('./devops/console.ts')
import * as Rx from './shims/rxjs.ts'

queueMicrotask(async function onload() {
	let jellyfin = await import('./jellyfin/jellyfin.ts')
	await jellyfin.run()
	console.info('jellyfin ready')
	let nghttpx = await import('./nghttpx/nghttpx.ts')
	await nghttpx.run()
	console.info('nghttpx ready')
	await import('./jellyfin/config.ts')
	await import('./jellyfin/socket.ts')
	await import('./jellyfin/search.ts')
})
