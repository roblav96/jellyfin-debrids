import * as what from 'https://deno.land/x/is_what/src/index.ts'
import mapObj from 'https://esm.sh/map-obj?dev'
import sortKeys from 'https://esm.sh/sort-keys?dev'

const outfile = new URL('../types/themoviedb.d.ts', import.meta.url).pathname

let json = mapObj(
	await (
		await fetch('https://api.stoplight.io/v1/versions/9WaNJfGpnnQ76opqe/export/oas.json')
	).json(),
	(key, value) => {
		if (what.isPlainObject(value)) {
			return [key, sortKeys(value, { deep: true })]
		}
		return [key, value] as any
	},
	{ deep: true },
)

let child = Deno.spawnChild('npx', {
	args: ['--yes', 'dtsgenerator'],
	stdin: 'piped',
	// stdout: 'inherit',
	stderr: 'inherit',
})
let writer = child.stdin.getWriter()
await writer.write(new TextEncoder().encode(JSON.stringify(json)))
writer.releaseLock()
await child.stdin.close()
let stdout = new TextDecoder().decode((await child.output()).stdout)
// console.log('stdout ->', stdout.length)

stdout = stdout.replaceAll('declare ', '')
stdout = stdout.replaceAll('export ', '')
stdout = stdout.replaceAll('?: ', ': ')
stdout = stdout.replaceAll(' | null;', ';')
stdout = stdout.replaceAll(' null | ', ' ')

stdout = stdout.replaceAll(/ = \/\* .*? \*\/ /g, ' = ')
stdout = stdout.replaceAll(/: \/\* .*? \*\/ /g, ': ')
stdout = stdout.replaceAll(/: \/\*\*.*?\*\/\s+/gms, ': ')
stdout = stdout.replaceAll(/: \(\/\* .*? \*\/ /g, ': (')
stdout = stdout.replaceAll(/ \| \/\* .*? \*\/ /g, ' & ')

stdout = stdout.replace(/^namespace Responses {$/m, 'namespace ErrorResponses {')
stdout = stdout.replace(/^namespace Parameters {$/m, 'namespace TraitParameters {')
stdout = stdout.replaceAll(' Parameters.Trait', ' TraitParameters.Trait')

stdout = stdout.replace(/^namespace Paths {\n(.*?)\n}$/ms, '$1')
stdout = stdout.replaceAll(/namespace Responses {\s+(.*?)\s+}$/gms, '$1')

stdout = stdout.replaceAll('\n\n', '\n')
await Deno.writeTextFile(outfile, `declare namespace Tmdb {\n${stdout}}\n`)

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
