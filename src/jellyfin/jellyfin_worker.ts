await import('../devops/console.ts')

import * as io from 'https://deno.land/std/io/mod.ts'

console.log('Deno.env.toObject() ->', Deno.env.toObject())
console.log('Deno.mainModule ->', Deno.mainModule)

console.log('self ->', self)

// const exec = Deno.run({
// 	cmd: ['jellyfin', '--service'],
// 	stdout: 'piped',
// 	stderr: 'piped',
// })

// let readers = new io.MultiReader(exec.stdout, exec.stderr)
// for await (let chunk of io.readLines(readers)) {
// 	console.log('chunk ->', chunk)
// }

// self.onmessage = async function (e) {
// 	const { cmd, fileName } = e.data
// 	if (cmd !== 'readFile') {
// 		throw new Error('Invalid command')
// 	}
// 	const buf = await Deno.readFile(fileName)
// 	const fileContents = new TextDecoder().decode(buf)
// 	console.log(fileContents)
// }
