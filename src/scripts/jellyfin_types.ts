import 'https://deno.land/std/dotenv/load.ts'
import * as what from 'https://deno.land/x/is_what/src/index.ts'
import mapObj from 'https://esm.sh/map-obj?dev'
import sortKeys from 'https://esm.sh/sort-keys?dev'

const outfile = new URL('../types/jellyfin.d.ts', import.meta.url).pathname

let json = mapObj(
	// await (
	// 	await fetch(`http://127.0.0.1:${Deno.env.get('JELLYFIN_PORT')}/api-docs/openapi.json`)
	// ).json(),
	await (
		await fetch('https://repo.jellyfin.org/releases/openapi/jellyfin-openapi-stable-pre.json')
	).json(),
	(key, value) => {
		if (key == 'allOf' && Array.isArray(value) && value.length == 1) {
			let $ref = value[0].$ref
			if (typeof $ref == 'string') {
				return ['$ref', $ref]
			}
		}
		if (what.isPlainObject(value)) {
			return [key, sortKeys(value, { deep: true })]
		}
		return [key, value] as any
	},
	{ deep: true },
)

let child = Deno.spawnChild('npx', {
	args: [
		'--yes',
		'--package=dtsgenerator',
		// '--package=@dtsgenerator/decorate-typename',
		'--',
		'dtsgen',
		// '--config',
		// 'dtsgen.json',
		// '--info',
	],
	stdin: 'piped',
	// stdout: 'inherit',
	// stderr: 'inherit',
})
let writer = child.stdin.getWriter()
await writer.write(new TextEncoder().encode(JSON.stringify(json)))
writer.releaseLock()
await child.stdin.close()
let stdout = new TextDecoder().decode((await child.output()).stdout)
// console.log('stdout ->', stdout.length)

stdout = stdout.replace('declare namespace Components {', '')
stdout = stdout.replace('declare namespace Paths {', '')
stdout = stdout.replaceAll('Components.Schemas.', 'Schemas.')
stdout = stdout.replaceAll('\n}\n', '\n')
stdout = stdout.replaceAll('?: ', ': ')
stdout = stdout.replaceAll(' | null;', ';')
stdout = stdout.replaceAll(' null | ', ' ')
stdout = stdout.replaceAll('export ', '')

let lines = stdout.split('\n')
let [bounds, n] = [['        namespace Responses {', '        }'], 0]
lines = lines.filter((line) => {
	if (line == '') return false
	if (line == bounds[n % 2]) {
		n++
		return false
	}
	return true
})
lines = lines.map((line) => {
	if (line.includes(': /* ')) return line.replace(/: \/\* .* \*\/ /, ': ')
	if (line.includes(' = /* ')) return line.replace(/ = \/\* .* \*\/ /, ' = ')
	return line
})
lines.unshift('declare namespace Jellyfin {')
lines.push('}\n')

await Deno.writeTextFile(outfile, lines.join('\n'))

await Deno.spawn(Deno.execPath(), {
	args: [
		'fmt',
		'--unstable',
		'--config=/dev/null',
		'--options-indent-width=4',
		'--options-line-width=100',
		outfile,
	],
})
