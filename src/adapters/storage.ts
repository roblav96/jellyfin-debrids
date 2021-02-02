import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
import dataDir from 'https://deno.land/x/data_dir/mod.ts'

export class Db extends Map {
	static fromUrl(url: string) {
		return new Db(path.basename(url))
	}

	private dirpath: string
	private keypath(key: string) {
		return path.join(this.dirpath, key)
	}

	constructor(private namespace: string) {
		super()
		this.dirpath = path.join(dataDir()!, 'jellyfin-debrids', this.namespace)
		fs.ensureDirSync(this.dirpath)
		for (let entry of Deno.readDirSync(this.dirpath)) {
			super.set(entry.name, JSON.parse(Deno.readTextFileSync(this.keypath(entry.name))))
		}
	}

	clear() {
		Deno.removeSync(this.dirpath, { recursive: true })
		fs.ensureDirSync(this.dirpath)
		return super.clear()
	}

	delete(key: string) {
		Deno.removeSync(this.keypath(key), { recursive: true })
		return super.delete(key)
	}

	get(key: string) {
		let value = super.get(key)
		return value
	}

	set(key: string, value: any) {
		Deno.writeTextFileSync(this.keypath(key), JSON.stringify(value))
		return super.set(key, value)
	}
}
