import * as what from 'https://deno.land/x/is_what/src/index.ts'
import sortKeys from 'https://esm.sh/sort-keys?dev'

export function mapper(key: string, value: any) {
	if (what.isPlainObject(value)) {
		return [key, sortKeys(value, { deep: true })]
	}
	return [key, value]
}

export async function dtsgen(json: Record<string, any>) {
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
	let output = new TextDecoder().decode((await child.output()).stdout)
	output = output
		.replaceAll('declare ', '')
		.replaceAll('export ', '')
		.replaceAll('?: ', ': ')
		.replaceAll(' | null;', ';')
		.replaceAll(' null | ', ' ')
		.replaceAll(/([=|:]) \/\*\*\n.*? \*\/\s+/gms, '$1 ')
		.replaceAll(/; \/\/ .*/g, ';')

	// .replaceAll(/ \/\* .* \*\/;/g, ';')
	// .replaceAll(/ \| \/\* .* \*\/ /g, ' | ____ ')
	// .replaceAll(/: \/\* .* \*\/ /g, ': ____ ')
	// .replaceAll(/\B \| \/\* .* \*\/ \B/g, ' ____ ')
	// .replaceAll(/([=|:]) \/\* .* \*\/ /g, '$1 ')

	// .replaceAll(/ \/\* .* \*\/ /g, ' ')
	// .replaceAll(/ \/\* .* \*\//g, '')
	// .replaceAll(/\/\* .* \*\/ /g, '')
	// .replaceAll(/: \(\/\* .*? \*\/ /g, ': (')
	// .replaceAll(/ \| \/\* .*? \*\/ /g, ' & ')

	let lines = output.split('\n')
	for (let i = 0; i < lines.length; i++) {
		let line = lines[i]
		if (line.includes(' /* ')) {
			let split = line.split(/\/\*|\*\//)
			let filter = split.filter((v, i) => !(i % 2))
			lines[i] = filter.join('')
		}
	}
	output = lines.join('\n')

	return output
}

export async function write(name: string, output: string) {
	output = output.replace(/^namespace Components {\n(.*?)\n}$/ms, '$1')
	output = output.replace(/^namespace Paths {\n(.*?)\n}$/ms, '$1')
	output = output.replaceAll(/^ {8}namespace Responses {\n(.*?)\n {8}}$/gms, '$1')
	output = output.replaceAll('\n\n', '\n')
	let outfile = new URL(`../types/${name.toLowerCase()}.d.ts`, import.meta.url).pathname
	await Deno.writeTextFile(outfile, `declare namespace ${name} {\n${output}}\n`)
	await Deno.spawn(Deno.execPath(), {
		args: [
			'fmt',
			'--unstable',
			'--config=/dev/null',
			'--options-indent-width=4',
			'--options-line-width=999',
			outfile,
		],
		// stdout: 'inherit',
		stderr: 'inherit',
	})
}
