/**
	rm -r -f node_modules
	npm install --silent --ignore-scripts --no-audit
	deno run --unstable --no-check --allow-all src/scripts/postinstall.ts
*/

// await import('../devops/console.ts')
import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

let root_path = Deno.env.get('ROOT_PATH')!
let pkgjson = JSON.parse(await Deno.readTextFile(path.join(root_path, 'package.json'))) as {
	dependencies: Record<string, string>
	devDependencies: Record<string, string>
}

for (let pkg in pkgjson.dependencies) {
	let version = pkgjson.dependencies[pkg].replace(/[^\d.]/g, '')
	let pkgroot = path.join(root_path, 'node_modules', pkg)
	// console.warn('pkgroot ->', pkgroot)
	for await (let entry of fs.walk(pkgroot, { exts: ['.ts'] })) {
		// console.warn('entry ->', entry.path)
		let data = (await Deno.readTextFile(entry.path)).replace(
			/ from ["'`](.+\b)["'`];?$/gm,
			(match, capture: string) => {
				let source = path.resolve(path.dirname(entry.path), capture)
				for (let ext of ['.d.ts', '.ts', '.js']) {
					if (fs.existsSync(`${source}${ext}`)) {
						return match.replace(capture, `${capture}${ext}`)
					}
				}
				return match
			},
		)
		if (pkg == 'rxjs' && version.startsWith('6.')) {
			if (entry.path.includes('rxjs/internal/scheduled/scheduled.d.ts')) {
				data = `// @ts-ignore\n${data}`
			}
		}
		if (pkg.startsWith('rambda') && entry.name == 'index.d.ts') {
			data = data.replace('export function isValid(', '// @ts-ignore\nexport function isValid(')
		}
		await Deno.writeTextFile(entry.path, data)
	}
}
