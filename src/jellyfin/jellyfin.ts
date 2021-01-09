import * as io from 'https://deno.land/std/io/mod.ts'

console.log('import.meta ->', import.meta)

let module = new URL('./jellyfin_worker.ts', import.meta.url)
console.log('module ->', module)
export const worker = new Worker(module.href, {
	deno: { namespace: true, permissions: 'inherit' },
	name: 'jellyfin_worker',
	type: 'module',
})
