await import('./devops/console.ts')
import * as Rx from './shims/rxjs.ts'

queueMicrotask(async function load() {
	await import('./jellyfin/setup.ts')
	let jellyfin = await import('./jellyfin/jellyfin.ts')
	// jellyfin.rxJellyfin.subscribe((line) => {
	// 	console.log('rxJellyfin line ->', line)
	// })
	await Rx.firstValueFrom(jellyfin.rxCdir.pipe(Rx.op.filter((cdir) => !!cdir)))
	let nghttpx = await import('./nghttpx/nghttpx.ts')
	nghttpx.rxAccess.subscribe((access) => {
		console.log('rxNghttpx access ->', access)
	})
})
