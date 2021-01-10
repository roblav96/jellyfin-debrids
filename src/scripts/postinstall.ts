// await import('../devops/console.ts')
import * as async from 'https://deno.land/std/async/mod.ts'
import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as io from 'https://deno.land/std/io/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

let root_path = Deno.env.get('ROOT_PATH')!
let pkgjson = JSON.parse(await Deno.readTextFile(path.join(root_path, 'package.json'))) as {
	dependencies: Record<string, string>
	devDependencies: Record<string, string>
}

// for (let pkg of ['rxjs']) {
for (let pkg in pkgjson.dependencies) {
	let pkgroot = path.join(root_path, 'node_modules', pkg)
	// console.warn('pkgroot ->', pkgroot)
	// await Deno.run({
	// 	cmd: ['deno', 'fmt', '--unstable', '--quiet', pkgroot],
	// }).status()
	// for await (let entry of fs.walk(pkgroot, { exts: ['.d.ts'] })) {
	// 	// if (entry.name.endsWith('.d.ts')) {
	// 	// 	continue
	// 	// }
	// 	await fs.move(entry.path, `${entry.path.slice(0, -5)}.ts`, { overwrite: true })
	// }
	for await (let entry of fs.walk(pkgroot, { exts: ['.ts'] })) {
		// console.warn('entry ->', entry.path)

		let data = (await Deno.readTextFile(entry.path)).replace(
			/ from ["'`](.+\b)["'`];?$/gm,
			(match, capture: string) => {
				let source = path.resolve(path.dirname(entry.path), capture)
				// let ext = ['.d.ts', '.ts', '.js'].find((ext) => {
				// 	return fs.existsSync(`${source}${ext}`)
				// })
				// // console.log('source ->', ext, source)
				// return ` from "${capture}${ext ?? ''}";`
				for (let ext of ['.d.ts', '.ts', '.js']) {
					if (fs.existsSync(`${source}${ext}`)) {
						return match.replace(capture, `${capture}${ext}`)
					}
				}
				return match
			},
		)
		if (entry.path.includes('rxjs/internal/scheduled/scheduled.d.ts')) {
			data = `// @ts-ignore\n${data}`
		}
		if (entry.path.includes('rambdax/index.d.ts')) {
			data = data.replace('export function isValid', '// @ts-ignore\nexport function isValid')
		}
		await Deno.writeTextFile(entry.path, data)

		// let lines = [] as string[]
		// let reader = await Deno.open(entry.path, { read: true })
		// for await (let line of io.readLines(reader)) {
		// 	// console.log(`${entry.path} ->\n${line}`)
		// 	let match = line.match(/ from "(?<source>.+)";$/)
		// 	if (match?.groups?.source) {
		// 		let source = path.resolve(path.dirname(entry.path), match.groups.source)
		// 		console.log('source ->', source)
		// 	}
		// 	lines.push(line)
		// }
		// console.warn(`${entry.path} ->\n${data}`)
		// data = data.replace(/ from "(.+)(\.ts";)$/gm, ' from "$1";')
		// data = data.replace(/ from "(.+)(";)$/gm, ' from "$1.ts$2')
		// console.warn(`${entry.path} ->\n${lines.join('\n')}`)
		// await Deno.writeTextFile(entry.path, lines.join('\n'))
	}
}

// let node_modules = path.join(root_path, 'node_modules')
