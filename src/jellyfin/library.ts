import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as jellyfin from './jellyfin.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
import * as Rx from '../shims/rxjs.ts'

export async function setVirtualFolders() {
	let SystemInfo = (await jellyfin.api.json('/System/Info')) as jellyfin.GetSystemInfo.$200
	let mediadir = path.join(SystemInfo.ProgramDataPath, 'media')
	await fs.ensureDir(mediadir)

	let VirtualFolders = (await jellyfin.api.json(
		'/Library/VirtualFolders',
	)) as jellyfin.GetVirtualFolders.$200
	console.log('VirtualFolders ->', VirtualFolders)
}
