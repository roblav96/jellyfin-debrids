await import('./devops/console.ts')
// await import('./envs/dotenv.ts')

import * as fae from 'https://deno.land/x/fae/mod.ts'
console.log('fae.all ->', fae.all)

import R from './npms/rambdax.ts'
console.log('R.keys ->', R.keys)

import Rx from './npms/rxjs.ts'
console.log('Rx.Subject ->', Rx.Subject)

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
