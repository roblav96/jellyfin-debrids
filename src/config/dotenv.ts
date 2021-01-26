import * as dotenv from 'https://deno.land/x/dotenv/mod.ts'
import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

let envdirs = Array.from(
	new Set([
		Deno.cwd(),
		path.dirname(path.fromFileUrl(Deno.mainModule)),
		path.dirname(path.dirname(path.fromFileUrl(Deno.mainModule))),
		path.dirname(path.fromFileUrl(import.meta.url)),
		path.dirname(path.dirname(path.fromFileUrl(import.meta.url))),
	]),
).filter((dir) => dir && fs.existsSync(dir))

for (let envdir of envdirs) {
	for (let envfile of ['.env.defaults', '.env'] as const) {
		let envpath = path.join(envdir, envfile)
		if (!fs.existsSync(envpath)) {
			continue
		}
		let config = dotenv.parse(Deno.readTextFileSync(envpath))
		// console.log(`'${envfile}' config ->`, config)
		for (let [key, value] of Object.entries(config)) {
			if (!value || Deno.env.get(key)) {
				continue
			}
			// console.warn(`'${envfile}' Deno.env.set '${key}' ->`, value)
			Deno.env.set(key, value)
		}
	}
}
