await import('./devops/console.ts')
import * as Rx from './shims/rxjs.ts'

queueMicrotask(async function load() {
	// console.info('queueMicrotask load ->')
	await import('./jellyfin/setup.ts')
	let jellyfin = await import('./jellyfin/jellyfin.ts')
	jellyfin.rxJellyfin.subscribe(line => {
		// console.log('line ->', line)
	})
	let ready = await Rx.firstValueFrom(
		jellyfin.rxListening.pipe(Rx.op.filter((address) => !!address)),
	)
	console.warn('jellyfin.rxListening ->', ready)
	// let nghttpx = await import('./nghttpx/nghttpx.ts')
	// console.log('nghttpx ->', nghttpx)
})
