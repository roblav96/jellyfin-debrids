await import('./devops/console.ts')
// await import('./envs/dotenv.ts')

import stringFn from './npms/string-fn.ts'
console.log('stringFn ->', stringFn)

// let dts = await import('./npms/dts-generate.ts')
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
