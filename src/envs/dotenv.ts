import * as dotenv from 'https://deno.land/x/dotenv/mod.ts'
import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

let envdirs = new Set([Deno.cwd(), path.dirname(path.fromFileUrl(Deno.mainModule))])
let metaurl = path.fromFileUrl(import.meta.url)
while ((metaurl = path.dirname(metaurl))) {
	if (envdirs.has(metaurl) || metaurl == path.parse(metaurl).root) {
		break
	}
	envdirs.add(metaurl)
}

for (let envdir of Array.from(envdirs).filter(Boolean)) {
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
