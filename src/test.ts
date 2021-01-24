await import('./devops/console.ts')

// import * as module from 'https://deno.land/std/node/module.ts'
// console.log('module ->', module)

let idk = Deno.core.evalContext(
	"(async () => console.log('Deno.resources() ->', Deno.resources()))()",
)[1]
console.log('idk ->', idk)
