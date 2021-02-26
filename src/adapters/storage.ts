import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
import dataDir from 'https://deno.land/x/data_dir/mod.ts'
import Emittery from 'https://esm.sh/emittery?dev'
import { serialize, deserialize } from 'https://deno.land/x/serialize_javascript/mod.ts'

// export interface Db extends Map<string, unknown> {}
export class Db {
	static fromUrl(url: string, ttl?: number) {
		return new Db(path.basename(url), ttl)
	}

	private dirpath: string
	private keypath(key: string) {
		return path.join(this.dirpath, key)
	}

	constructor(private namespace: string, private ttl?: number) {
		this.dirpath = path.join(dataDir()!, 'jellyfin-debrids', this.namespace)
		fs.ensureDirSync(this.dirpath)
	}

	async clear() {
		await Deno.remove(this.dirpath, { recursive: true })
		await fs.ensureDir(this.dirpath)
	}

	async delete(key: string) {
		await Deno.remove(this.keypath(key))
	}

	async has(key: string) {
		return await fs.exists(this.keypath(key))
	}

	async get(key: string) {
		let data = await Deno.readTextFile(this.keypath(key))
		if (typeof data != 'string') {
			return
		}
		let [value, ttl] = JSON.parse(data) as [any, number?]
		if (typeof ttl == 'number' && Date.now() > ttl) {
			await this.delete(key)
		} else {
			return value
		}
	}

	async set(key: string, value: any, ttl?: number) {
		if (typeof ttl == 'number') {
			ttl = Date.now() + ttl
		}
		await Deno.writeTextFile(this.keypath(key), JSON.stringify([value, ttl] as [any, number?]))
	}

	async entries() {
		let entries = [] as [string, any][]
		for await (let entry of Deno.readDir(this.dirpath)) {
			let value = await this.get(entry.name)
			value && entries.push([entry.name, value])
		}
		return entries
	}

	// async keys() {
	// 	let keys = [] as string[]
	// 	for await (let entry of Deno.readDir(this.dirpath)) {
	// 		keys.push(entry.name)
	// 	}
	// 	return keys
	// }
	// async values() {
	// 	let values = [] as string[]
	// 	for await (let entry of Deno.readDir(this.dirpath)) {
	// 		values.push(entry.name)
	// 	}
	// 	return values
	// }
}
