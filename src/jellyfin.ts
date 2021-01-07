import * as io from 'https://deno.land/std/io/mod.ts'

const exec = Deno.run({
	cmd: ['dotnet', '--help'],
	stdout: 'piped',
	stderr: 'piped',
})

let readers = new io.MultiReader(exec.stdout, exec.stderr)
for await (let chunk of io.readLines(readers)) {

}
