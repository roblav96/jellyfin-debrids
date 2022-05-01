import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
import * as what from 'https://deno.land/x/is_what/src/index.ts'
import cache_dir from 'https://deno.land/x/dir/cache_dir/mod.ts'

export default class Db<T extends unknown> {
	private static fromFileURL(fileURL: string) {
		let relative = path.relative(path.dirname(Deno.mainModule), fileURL)
		if (!relative || relative.startsWith('file:') || path.isAbsolute(relative)) {
			return path.basename(fileURL)
		}
		return relative
	}

	private dirpath: string
	private keypath(key: string) {
		return path.join(this.dirpath, key.replaceAll(/\W/g, '_'))
	}

	constructor(namespace: string, private ttl?: number) {
		if (namespace.startsWith('file:')) {
			namespace = Db.fromFileURL(namespace)
		}
		this.dirpath = path.join(cache_dir()!, 'jellyfin-debrids', namespace.replaceAll(/\W/g, '_'))
	}

	async clear() {
		await Deno.remove(this.dirpath, { recursive: true }).catch(() => {})
	}

	async delete(key: string) {
		await Deno.remove(this.keypath(key)).catch(() => {})
	}

	async has(key: string) {
		return await fs.exists(this.keypath(key))
	}

	async get<TT = T>(key: string) {
		let data = await Deno.readTextFile(this.keypath(key)).catch(() => {})
		if (!what.isString(data)) return
		let [value, ttl] = JSON.parse(data) as [TT, number?]
		if (what.isPositiveNumber(ttl) && Date.now() > ttl) {
			await this.delete(key)
		} else {
			return value
		}
	}

	async set<TT = T>(key: string, value: TT, ttl?: number) {
		if (!what.isPositiveNumber(ttl) && what.isPositiveNumber(this.ttl)) ttl = this.ttl
		await fs.ensureDir(this.dirpath)
		await Deno.writeTextFile(
			this.keypath(key),
			JSON.stringify(what.isPositiveNumber(ttl) ? [value, Date.now() + ttl] : [value]),
		)
	}

	async entries<TT = T>() {
		let entries = [] as [string, TT][]
		try {
			for await (let entry of Deno.readDir(this.dirpath)) {
				let value = await this.get<TT>(entry.name)
				if (value) entries.push([entry.name, value])
			}
		} catch {}
		return entries
	}
	async keys() {
		return (await this.entries()).map(([key, value]) => key)
	}
	async values<TT = T>() {
		return (await this.entries()).map(([key, value]) => value) as TT[]
	}
}
