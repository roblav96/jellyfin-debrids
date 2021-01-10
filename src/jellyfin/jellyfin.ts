import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as io from 'https://deno.land/std/io/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

await ensureConfigDir()

let worker = new Worker(new URL('jellyfin_worker.ts', import.meta.url).href, {
	deno: { namespace: true, permissions: 'inherit' },
	name: 'jellyfin_worker',
	type: 'module',
})

worker.addEventListener('message', function onJellyfinMessage(event) {
	if (event?.data?.chunk) {
		console.log('jellyfin_worker chunk ->', event.data.chunk)
	} else {
		// console.log('jellyfin_worker event ->', event.data)
	}
})

worker.addEventListener('error', function onJellyfinError(event) {
	console.error('jellyfin_worker error ->', event.message)
})

export async function ensureConfigDir() {
	let jellyfin_config_dir = Deno.env.get('JELLYFIN_CONFIG_DIR') as string
	if (!path.isAbsolute(jellyfin_config_dir)) {
		throw new TypeError('JELLYFIN_CONFIG_DIR must be an absolute path.')
	}
	if (await fs.exists(jellyfin_config_dir)) return
	await fs.ensureDir(jellyfin_config_dir)
	let root_path = Deno.env.get('ROOT_PATH') as string
	await fs.copy(
		path.join(root_path, 'configs', 'jellyfin', 'logging.json'),
		path.join(jellyfin_config_dir, 'logging.json'),
	)
	await fs.copy(
		path.join(root_path, 'configs', 'jellyfin', 'system.xml'),
		path.join(jellyfin_config_dir, 'system.xml'),
	)
}
