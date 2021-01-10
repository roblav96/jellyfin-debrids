await import('./devops/console.ts')
// await import('./envs/dotenv.ts')

let nghttpx = await import('./nghttpx/nghttpx.ts')
let jellyfin = await import('./jellyfin/jellyfin.ts')
// jellyfin.run()
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
