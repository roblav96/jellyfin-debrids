import * as dotenv from 'https://deno.land/x/dotenv/mod.ts'
import * as flags from 'https://deno.land/std/flags/mod.ts'
import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
import { constantCase } from 'https://deno.land/x/case/mod.ts'

export async function config({ envdir = Deno.cwd(), useflags = true } = {}) {
	let parseds = [] as Record<string, string>[]
	for (let file of [/** '.env.defaults', */ '.env']) {
		let envpath = path.join(envdir, file)
		if (envpath && (await fs.exists(envpath))) {
			parseds.push(dotenv.parse(await Deno.readTextFile(envpath)))
		}
	}
	if (useflags == true) {
		let args = {} as Record<string, string>
		for (let [key, value] of Object.entries(flags.parse(Deno.args))) {
			if (key == '_') continue
			args[key] = value.toString()
		}
		parseds.push(args)
	}
	for (let parsed of parseds) {
		for (let [key, value] of Object.entries(parsed)) {
			key = constantCase(key)
			if ((Deno.env.get(key) ?? '').length > 0) continue
			if (typeof value != 'string' || value.length == 0) continue
			console.warn(`Deno.env.set '${key}' ->`, value)
			Deno.env.set(key, value)
		}
	}
}
