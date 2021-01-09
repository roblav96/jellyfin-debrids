import * as io from 'https://deno.land/std/io/mod.ts'

export const worker = new Worker(new URL('jellyfin_worker.ts', import.meta.url).href, {
	deno: { namespace: true, permissions: 'inherit' },
	name: 'jellyfin_worker',
	type: 'module',
})
