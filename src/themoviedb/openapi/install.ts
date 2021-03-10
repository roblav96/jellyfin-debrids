import * as what from 'https://deno.land/x/is_what/src/index.ts'
import mapObj from 'https://esm.sh/map-obj?dev'
import sortKeys from 'https://esm.sh/sort-keys?dev'

const outfile = new URL('./openapi.ts', import.meta.url).pathname
const outjson = new URL('./openapi.json', import.meta.url).pathname

let json = mapObj(
	// JSON.parse(await Deno.readTextFile(outjson)),
	await (
		await fetch('https://api.stoplight.io/v1/versions/9WaNJfGpnnQ76opqe/export/oai.json')
	).json(),
	(key, value) => {
		if (what.isPlainObject(value)) {
			return [key, sortKeys(value, { deep: true })]
		}
		return [key, value] as any
	},
	{ deep: true },
)

await Deno.writeTextFile(outjson, JSON.stringify(json, null, 4))
let dtsgenerator = Deno.run({
	cmd: ['npx', 'dtsgenerator', '--out', outfile, outjson],
})
await dtsgenerator.status()
dtsgenerator.close()

let openapi = await Deno.readTextFile(outfile)
openapi = openapi.replace('declare namespace Paths {', '')
openapi = openapi.replace('\n}\ndeclare namespace Responses {', '\ndeclare namespace Responses {')
openapi = openapi.replaceAll('declare namespace ', 'export namespace ')
openapi = openapi.replaceAll('\n    namespace ', '\n    export namespace ')
openapi = openapi.replaceAll('?: ', ': ')
openapi = openapi.replaceAll('| null;', ';')
openapi = openapi.replaceAll(' null | ', ' ')

let [bounds, n] = [['        namespace Responses {', '        }'], 0]
let lines = openapi.split('\n').filter((line) => {
	if (line == bounds[n % 2]) {
		n++
		return false
	}
	return true
})
openapi = lines.join('\n')

await Deno.writeTextFile(outfile, openapi)

let prettier = Deno.run({
	cmd: [
		'npx',
		'prettier',
		'--no-config',
		// '____',
		'--no-semi',
		'--print-width=100',
		'--prose-wrap=never',
		'--quote-props=consistent',
		'--single-quote',
		'--tab-width=4',
		'--trailing-comma=all',
		'--use-tabs',
		// '____',
		'--write',
		outfile,
	],
})
await prettier.status()
prettier.close()
