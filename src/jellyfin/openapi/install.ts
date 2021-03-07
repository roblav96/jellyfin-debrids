import mapObj from 'https://esm.sh/map-obj?dev'

const outfile = new URL('./openapi.ts', import.meta.url).pathname

let json = mapObj(
	JSON.parse(await Deno.readTextFile(new URL('./openapi.json', import.meta.url).pathname)),
	// await (await fetch('http://127.0.0.1:8096/api-docs/openapi.json')).json(),
	(key, value) => {
		if (key == 'allOf' && Array.isArray(value) && value.length == 1) {
			let $ref = value[0].$ref
			if (typeof $ref == 'string') {
				return ['$ref', $ref]
			}
		}
		return [key, value] as any
	},
	{ deep: true },
)

let tempjson = await Deno.makeTempFile({ suffix: '.json' })
await Deno.writeTextFile(tempjson, JSON.stringify(json))
let dtsgenerator = Deno.run({
	cmd: ['npx', 'dtsgenerator', '--out', outfile, tempjson],
})
await dtsgenerator.status()
dtsgenerator.close()
await Deno.remove(tempjson)

let openapi = await Deno.readTextFile(outfile)
openapi = openapi.replace('declare namespace Components {', '')
openapi = openapi.replace('namespace Schemas {', 'export namespace Schemas {')
openapi = openapi.replace('declare namespace Components {', '')
openapi = openapi.replace('declare namespace Paths {', '')
openapi = openapi.replaceAll('Components.Schemas.', 'Schemas.')
openapi = openapi.replaceAll('\n}\n', '\n')
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
for (let i = 0; i < lines.length; i++) {
	if (!lines[i].includes(': /* ')) continue
	lines[i] = lines[i].replace(
		/            (\w+): \/\* (.*) \*\/ /,
		`            /** $2 */\n            $1: `,
	)
}
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

let check = Deno.run({
	cmd: ['deno', 'cache', '--unstable', outfile],
})
await check.status()
check.close()
