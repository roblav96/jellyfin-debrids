import '/console.ts'

queueMicrotask(async () => {
	await import('/configs.ts')
	let jellyfin = await import('/jellyfin.ts')
	console.log('jellyfin ->', jellyfin)
})
