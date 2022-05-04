import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
import * as what from 'https://deno.land/x/is_what/src/index.ts'
import cache_dir from 'https://deno.land/x/dir/cache_dir/mod.ts'

export default class Db<T extends unknown> {
	static fromFileUrl(fileUrl: string) {
		let relative = path.relative(path.dirname(Deno.mainModule), fileUrl)
		if (!relative || relative.startsWith('file:') || path.isAbsolute(relative)) {
			return path.basename(fileUrl)
		}
		return relative
	}

	dirpath: string
	keypath(key: string) {
		return path.join(this.dirpath, key.replaceAll(/\W/g, '_'))
	}

	constructor(namespace: string, public ttl?: number) {
		if (namespace.startsWith('file:')) {
			namespace = Db.fromFileUrl(namespace)
		}
		this.dirpath = path.join(cache_dir()!, 'jellyfin-debrids', namespace.replaceAll(/\W/g, '_'))
	}

	clear() {
		try {
			Deno.removeSync(this.dirpath, { recursive: true })
		} catch {}
	}

	delete(key: string) {
		try {
			Deno.removeSync(this.keypath(key))
		} catch {}
	}

	has(key: string) {
		return fs.existsSync(this.keypath(key))
	}

	get<TT = T>(key: string) {
		let data!: string
		try {
			data = Deno.readTextFileSync(this.keypath(key))
		} catch {}
		if (!what.isFullString(data)) return
		let [value, ttl] = JSON.parse(data) as [TT, number?]
		if (what.isPositiveNumber(ttl) && Date.now() > ttl) {
			this.delete(key)
		} else {
			return value
		}
	}

	set<TT = T>(key: string, value: TT, ttl?: number) {
		if (!what.isPositiveNumber(ttl) && what.isPositiveNumber(this.ttl)) {
			ttl = this.ttl
		}
		fs.ensureDirSync(this.dirpath)
		Deno.writeTextFileSync(
			this.keypath(key),
			JSON.stringify(what.isPositiveNumber(ttl) ? [value, Date.now() + ttl] : [value]),
		)
	}

	entries<TT = T>() {
		let entries = [] as [string, TT][]
		try {
			for (let entry of Deno.readDirSync(this.dirpath)) {
				let value = this.get<TT>(entry.name)
				if (value) entries.push([entry.name, value])
			}
		} catch {}
		return entries
	}
	keys() {
		return this.entries().map(([key, value]) => key)
	}
	values<TT = T>() {
		return this.entries().map(([key, value]) => value) as TT[]
	}
}
