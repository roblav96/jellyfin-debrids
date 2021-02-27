import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
import dataDir from 'https://deno.land/x/data_dir/mod.ts'
import Emittery from 'https://esm.sh/emittery?dev'
import { serialize, deserialize } from 'https://deno.land/x/serialize_javascript/mod.ts'

export default class Db<T extends unknown> {
	private dirpath: string
	private keypath(key: string) {
		if (!(key?.length > 0)) key = '_'
		return path.join(this.dirpath, key.replaceAll(/\W/g, '_'))
	}

	constructor(namespace: string, private ttl?: number) {
		if (typeof ttl == 'number') {
			this.ttl = Math.abs(ttl)
		}
		if (namespace.startsWith('file:')) {
			let relative = path.relative(path.dirname(Deno.mainModule), namespace)
			if (!relative || relative.startsWith('file:') || path.isAbsolute(relative)) {
				namespace = path.basename(namespace)
			} else {
				namespace = relative
			}
		}
		let datadir = dataDir()
		if (!datadir) throw new Deno.errors.NotFound('data directory via dataDir()')
		this.dirpath = path.join(datadir, 'jellyfin-debrids', namespace.replaceAll(/\W/g, '_'))
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

	async get<TT = T>(key: string) {
		let data = await Deno.readTextFile(this.keypath(key)).catch(() => {})
		if (typeof data != 'string') {
			return
		}
		let [value, ttl] = JSON.parse(data) as [TT, number?]
		if (typeof ttl == 'number' && Date.now() > ttl) {
			await this.delete(key)
		} else {
			return value
		}
	}

	async set<TT = T>(key: string, value: TT, ttl?: number) {
		if (typeof ttl == 'number') {
			ttl = Date.now() + Math.abs(ttl)
		}
		await Deno.writeTextFile(this.keypath(key), JSON.stringify([value, ttl]))
	}

	async entries<TT = T>() {
		let entries = [] as [string, TT][]
		for await (let entry of Deno.readDir(this.dirpath)) {
			let value = await this.get<TT>(entry.name)
			value && entries.push([entry.name, value])
		}
		return entries
	}
	async keys() {
		return (await this.entries()).map(([key, value]) => key)
	}
	async values<TT = T>() {
		return (await this.entries()).map(([key, value]) => value) as TT[]
	}
}
