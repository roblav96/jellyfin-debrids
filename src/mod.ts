await import('./devops/console.ts')
import * as Rx from './shims/rxjs.ts'

queueMicrotask(async function load() {
	await import('./jellyfin/setup.ts')
	let jellyfin = await import('./jellyfin/jellyfin.ts')
	jellyfin.worker.run()
	// jellyfin.rxJellyfin.subscribe((line) => {
	// 	console.log('rxJellyfin line ->', line)
	// })
	let cdir = await Rx.firstValueFrom(jellyfin.rxCdir.pipe(Rx.op.filter((cdir) => !!cdir)))
	console.info('jellyfin listening ->', cdir)
	let nghttpx = await import('./nghttpx/nghttpx.ts')
	nghttpx.worker.run()
	nghttpx.rxHttp.subscribe((http) => {
		console.log('rxNghttpxx http ->', http)
	})
})
