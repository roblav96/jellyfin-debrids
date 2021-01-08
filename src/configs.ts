import * as dotenv from 'https://deno.land/x/dotenv/mod.ts'
import { ROOT_PATH } from '/console.ts'

dotenv.config({ export: true, path: ROOT_PATH })
