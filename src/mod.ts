await import('./devops/console.ts')
// await import('./envs/dotenv.ts')

import * as R from './shims/rambdax.ts'
console.log('R ->', R.range(12)(22))
console.log('R.allFalse([]) ->', R.allFalse([true]))


// await console.dts(Deno.core, 'Deno.core')

// const Rx = await import('https://dev.jspm.io/rxjs')
// import Rx from 'https://dev.jspm.io/rxjs@next'
// import * as Rx from 'https://esm.sh/rxjs@next'
// import * as Rx from './npms/rxjs.ts'

// let nghttpx = await import('./nghttpx/nghttpx.ts')
// console.log('nghttpx ->', nghttpx)
// let jellyfin = await import('./jellyfin/jellyfin.ts')
// console.log('jellyfin ->', jellyfin)

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
