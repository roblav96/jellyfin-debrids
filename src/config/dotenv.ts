import * as dotenv from 'https://deno.land/x/dotenv/mod.ts'
import * as flags from 'https://deno.land/std/flags/mod.ts'
import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
import { constantCase } from 'https://deno.land/x/case/mod.ts'

export async function config({ envpath = path.join(Deno.cwd(), '.env'), useflags = true } = {}) {
	let parseds = [] as Record<string, string>[]
	if (envpath && (await fs.exists(envpath))) {
		parseds.push(dotenv.parse(await Deno.readTextFile(envpath)))
	}
	if (useflags == true) {
		parseds.push(flags.parse(Deno.args))
	}
	for (let parsed of parseds) {
		for (let [key, value] of Object.entries(parsed)) {
			key = constantCase(key)
			if ((key ?? '').length == 0) continue
			if ((Deno.env.get(key) ?? '').length != 0) continue
			if ((value ?? '').length == 0) continue
			console.warn(`Deno.env.set '${key}' ->`, value)
			Deno.env.set(key, value)
		}
	}
}
