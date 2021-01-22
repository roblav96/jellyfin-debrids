await import('./devops/console.ts')
// await import('./envs/dotenv.ts')
import * as Rx from './shims/rxjs.ts'

queueMicrotask(async function onload() {
	let graylog = await import('./workers/GraylogWorker.ts')
	console.log('graylog ->', graylog)

	// await (await import('./workers/jellyfin_worker.ts')).run()
	// console.info('jellyfin ready')
	// await (await import('./workers/nghttpx_worker.ts')).run()
	// console.info('nghttpx ready')
	// await import('./jellyfin/jellyfin.ts')
	// await import('./jellyfin/socket.ts')
	// await import('./jellyfin/search.ts')
})
