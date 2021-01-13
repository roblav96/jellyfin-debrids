await import('../devops/console.ts')
import * as async from 'https://deno.land/std/async/mod.ts'
import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as io from 'https://deno.land/std/io/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

const exec = Deno.run({
	cmd: ['jellyfin', '--service'],
	stdout: 'piped',
	stderr: 'piped',
})

exec.status().then((status) => self.postMessage({ status }))

let mux = new async.MuxAsyncIterator<string>()
mux.add(io.readStringDelim(exec.stdout, '\n\n'))
mux.add(io.readStringDelim(exec.stderr, '\n\n'))
for await (let chunk of mux) {
	// if (!chunk.startsWith('[')) {
	// 	chunk = `[${chunk}`
	// }
	if (chunk.startsWith('\n')) {
		chunk = chunk.slice(1)
	}
	if (chunk.endsWith('\r')) {
		chunk = chunk.slice(0, -1)
	}
	self.postMessage({ chunk })
}
