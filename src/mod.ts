import '@/console.ts'

queueMicrotask(async () => {
	let nghttpx = await import('@/nghttpx.ts')
	let jellyfin = await import('@/jellyfin.ts')
	// import('@/server.ts')
})
