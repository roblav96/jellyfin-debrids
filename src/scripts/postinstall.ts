await import('../devops/console.ts')
import * as async from 'https://deno.land/std/async/mod.ts'
import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as io from 'https://deno.land/std/io/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

let root_path = Deno.env.get('ROOT_PATH')!
let pkgjson = JSON.parse(await Deno.readTextFile(path.join(root_path, 'package.json'))) as {
	dependencies: Record<string, string>
	devDependencies: Record<string, string>
}

// for (let pkg in pkgjson.dependencies) {
for (let pkg of ['dts-generate']) {
	let pkgroot = path.join(root_path, 'node_modules', pkg)
	let exec = await Deno.run({
		cmd: ['deno', 'fmt'],
	})
	console.log('await exec.status() ->', await exec.status())
	for await (let entry of fs.walk(pkgroot, { exts: ['.d.ts'] })) {
		let data = await Deno.readTextFile(entry.path)
		console.warn(`${entry.path} ->\n${data}`)
		// data = data.replace(/<(.+)>:(\d+):(\d+)/, '$1')
		Deno.formatDiagnostics
		console.log(`${entry.path} ->\n${data}`)
	}
}

// let node_modules = path.join(root_path, 'node_modules')
