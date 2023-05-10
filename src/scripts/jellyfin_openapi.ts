import 'https://deno.land/std/dotenv/load.ts'
import * as openapi from './openapi.ts'
import mapObj from 'https://esm.sh/map-obj?dev'

let output = await openapi.dtsgen(
	mapObj(
		await (
			await fetch(
				// `http://127.0.0.1:${Deno.env.get('JELLYFIN_PORT')}/api-docs/openapi.json`,
				'https://repo.jellyfin.org/releases/openapi/jellyfin-openapi-stable-pre.json',
			)
		).json(),
		(key, value) => {
			if (key == 'allOf' && Array.isArray(value) && value.length == 1) {
				let $ref = value[0].$ref
				if (typeof $ref == 'string') {
					return ['$ref', $ref]
				}
			}
			return openapi.mapper(key as string, value) as any
		},
		{ deep: true },
	),
)

output = output.replaceAll('Components.Schemas.', 'Schemas.')

await openapi.write('Jellyfin', output)
