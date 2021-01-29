import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
import dataDir from 'https://deno.land/x/data_dir/mod.ts'

export class Db {
	private filepath = path.join(dataDir()!, 'Jellyfin Debrids', this.namespace)
	constructor(private namespace: string) {

	}
}
