import * as flags from 'https://deno.land/std/flags/mod.ts'
import { constantCase } from 'https://deno.land/x/case/mod.ts'

export async function load() {
	for (let [key, value] of Object.entries(flags.parse(Deno.args))) {
		if (typeof value != 'string') continue
		// console.warn(`Deno.env.set '${key}' ->`, value)
		Deno.env.set(constantCase(key), value)
	}
}
