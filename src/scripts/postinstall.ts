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
	await Deno.run({
		cmd: ['deno', 'fmt', '--unstable', '--quiet', pkgroot],
	}).status()
	for await (let entry of fs.walk(pkgroot, { exts: ['.d.ts'] })) {
		let data = await Deno.readTextFile(entry.path)
		// console.warn(`${entry.path} ->\n${data}`)
		data = data.replace(/ from "(.+)(\.d\.ts";)$/gm, ' from "$1";')
		data = data.replace(/ from "(.+)(";)$/gm, ' from "$1.d.ts$2')
		// console.log(`${entry.path} ->\n${data}`)
		await Deno.writeTextFile(entry.path, data)
	}
}

// let node_modules = path.join(root_path, 'node_modules')
