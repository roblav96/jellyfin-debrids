import * as dotenv from 'https://deno.land/x/dotenv/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

// const ROOT_PATH = path.dirname(path.dirname(Deno.mainModule))
// Deno.env.set('ROOT_PATH', ROOT_PATH)

let config = dotenv.config({ export: true, path: `${Deno.env.get('ROOT_PATH')!}/.env` })
console.log('config ->', config)

// console.log('Deno.env.toObject() ->', Deno.env.toObject())
