await import('/devops/console.ts')
// await import('/envs/dotenv.ts')

let jellyfin = await import('/jellyfin/jellyfin.ts')
console.log('jellyfin ->', jellyfin)

// queueMicrotask(async () => {
// 	await import('/envs/configs.ts')
// 	let jellyfin = await import('/jellyfin.ts')
// 	console.log('jellyfin ->', jellyfin)
// })
