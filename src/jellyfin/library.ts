import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as jellyfin from './jellyfin.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
import * as Rx from 'https://esm.sh/rxjs?dev'

const vfolders = {
	movies: {},
	tvshows: {},
}

export async function setVirtualFolders() {
	let SystemInfo = (await jellyfin.api.json('System/Info')) as Jellyfin.GetSystemInfo.$200
	// console.log('SystemInfo ->', SystemInfo)
	let mediadir = path.join(SystemInfo.ProgramDataPath, 'media')
	await fs.ensureDir(mediadir)
	for (let vfolder in vfolders) {
		await fs.ensureDir(path.join(mediadir, vfolder))
	}

	let VirtualFolders = (await jellyfin.api.json(
		'Library/VirtualFolders',
	)) as Jellyfin.GetVirtualFolders.$200
	if (VirtualFolders.length == 0) {
		let library = `${SystemInfo.LocalAddress}/web/index.html#!/library.html`
		// await opener(library)
		throw new Error(`VirtualFolders.length == 0 -> ${library}`)
	}
	// console.log('VirtualFolders ->', VirtualFolders)

	let AvailableOptions = (await jellyfin.api.json('Libraries/AvailableOptions', {
		searchParams: {
			isNewLibrary: false,
			libraryContentType: 'tvshows',
		} as Jellyfin.GetLibraryOptionsInfo.QueryParameters,
	})) as Jellyfin.GetLibraryOptionsInfo.$200
	// console.log('AvailableOptions ->', AvailableOptions)

	// let LibraryOptions = (await jellyfin.api.json('Library/VirtualFolders/LibraryOptions', {
	// 	searchParams: ({
	// 		isNewLibrary: false,
	// 		libraryContentType: 'movies',
	// 	} as jellyfin.GetLibraryOptionsInfo.QueryParameters) as any,
	// })) as jellyfin.GetLibraryOptionsInfo.$200
	// console.log('LibraryOptions ->', LibraryOptions)
}
