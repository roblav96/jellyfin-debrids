import * as dotenv from 'https://deno.land/x/dotenv/mod.ts'
import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

export async function load(envdir = Deno.cwd()) {
	let envpath = path.join(envdir, '.env')
	if (!(await fs.exists(envpath))) return
	let config = dotenv.parse(await Deno.readTextFile(envpath))
	// console.log(`'.env' config ->`, config)
	for (let [key, value] of Object.entries(config)) {
		if (value == Deno.env.get(key)) continue
		// console.warn(`Deno.env.set '${key}' ->`, value)
		Deno.env.set(key, value)
	}
}
