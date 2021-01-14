import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

let jellyfin_config_dir = Deno.env.get('JELLYFIN_CONFIG_DIR')!
if (!path.isAbsolute(jellyfin_config_dir)) {
	throw new TypeError(`JELLYFIN_CONFIG_DIR must be an absolute path -> '${jellyfin_config_dir}'`)
}
await fs.ensureDir(jellyfin_config_dir)

let root_configs_dir = path.join(Deno.env.get('ROOT_PATH')!, 'configs', 'jellyfin')
for await (let entry of fs.walk(root_configs_dir, { includeDirs: false })) {
	let jellyfin_file = path.join(jellyfin_config_dir, entry.name)
	if (entry.name == 'logging.json') {
		await fs.copy(path.join(root_configs_dir, entry.name), jellyfin_file, { overwrite: true })
	}
	if (!(await fs.exists(jellyfin_file))) {
		await fs.copy(path.join(root_configs_dir, entry.name), jellyfin_file)
	}
}
