import * as library from './library.ts'
import * as socket from './socket.ts'
import * as wizard from './wizard.ts'
import Db from '../adapters/storage.ts'
import { Http } from '../adapters/http.ts'
import { open as opener } from 'https://deno.land/x/opener/mod.ts'

export const db = new Db(import.meta.url)

export const api = new Http({
	prefixUrl: `http://127.0.0.1:${Deno.env.get('JELLYFIN_PORT')}`,
	searchParams: { api_key: Deno.env.get('JELLYFIN_API_KEY') },
	// debug: true,
})

export async function start() {
	let PublicSystemInfo = (await api.json('System/Info/Public')) as Jellyfin.GetPublicSystemInfo.$200
	if (PublicSystemInfo.StartupWizardCompleted == false) {
		let wizardstart = `${PublicSystemInfo.LocalAddress}/web/index.html#!/wizardstart.html`
		// await opener(wizardstart)
		throw new Error(`StartupWizardCompleted == false -> ${wizardstart}`)
	}
	if (!Deno.env.get('JELLYFIN_API_KEY')) {
		let apikeys = `${PublicSystemInfo.LocalAddress}/web/index.html#!/apikeys.html`
		// await opener(apikeys)
		throw new Error(`Undefined JELLYFIN_API_KEY -> ${apikeys}`)
	}

	// let Item = await api.json('Items/a9fbd886fcb27f3ea621aad9b1f13733')
	// console.log('Item ->', Item)
	// throw new Error(`DEVELOPMENT`)

	socket.start(PublicSystemInfo)
	// await library.setVirtualFolders()
}
