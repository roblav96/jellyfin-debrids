await import('./devops/console.ts')
// await import('./envs/dotenv.ts')

import Rx from './libs/rxjs.ts'
console.log('Rx ->', Rx)
console.log('Rx.op ->', Rx.op)

// let dts = await import('./libs/dts-generate.ts')
// console.log('dts ->', dts.generate)

// let bus = await import('./events/bus.ts')
// let nghttpx = await import('./nghttpx/nghttpx.ts')
// let jellyfin = await import('./jellyfin/jellyfin.ts')

// self.addEventListener('load', async (event) => {
// 	console.log('mod.ts onload ->', event.type)
// })
// self.addEventListener('unload', async (event) => {
// 	console.log('mod.ts onunload ->', event.type)
// })

// queueMicrotask(async () => {
// 	await import('./envs/configs.ts')
// 	let jellyfin = await import('./jellyfin.ts')
// 	console.log('jellyfin ->', jellyfin)
// })
