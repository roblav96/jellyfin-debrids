await import('./devops/console.ts')
import * as Rx from './shims/rxjs.ts'

queueMicrotask(async function load() {
	await import('./jellyfin/setup.ts')
	let jellyfin = await import('./jellyfin/jellyfin.ts')
	jellyfin.worker.run()
	let cidr = await Rx.firstValueFrom(jellyfin.rxReady)
	console.info('jellyfin listening ->', cidr)
	let nghttpx = await import('./nghttpx/nghttpx.ts')
	nghttpx.worker.run()
	await Rx.firstValueFrom(nghttpx.rxReady)
	await import('./jellyfin/config.ts')
	await import('./jellyfin/socket.ts')
})
