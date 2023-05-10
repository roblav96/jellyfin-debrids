import * as openapi from './openapi.ts'
import mapObj from 'https://esm.sh/map-obj?dev'

let output = await openapi.dtsgen(
	mapObj(
		await (
			await fetch('https://api.stoplight.io/v1/versions/9WaNJfGpnnQ76opqe/export/oas.json')
		).json(),
		(key, value) => openapi.mapper(key as string, value) as any,
		{ deep: true },
	),
)

output = output.replace(/^namespace Responses {$/m, 'namespace ErrorResponses {')
output = output.replace(/^namespace Parameters {$/m, 'namespace TraitParameters {')
output = output.replaceAll(' Parameters.Trait', ' TraitParameters.Trait')

await openapi.write('Tmdb', output)
