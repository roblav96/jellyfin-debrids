export * from './openapi/openapi.ts'
import * as ENV from '../config/env.ts'
import * as library from './library.ts'
import * as socket from './socket.ts'
import * as wizard from './wizard.ts'
import Db from '../adapters/storage.ts'
import { GetPublicSystemInfo, GetSystemInfo } from './openapi/openapi.ts'
import { Http } from '../adapters/http.ts'
import { open as opener } from 'https://deno.land/x/opener/mod.ts'

export const db = new Db(import.meta.url)

export const api = new Http({
	prefixUrl: `http://127.0.0.1:${ENV.get('PORT', '8096')}`,
	searchParams: { api_key: ENV.get('API_KEY')! },
})

export async function start() {
	let PublicSystemInfo = (await api.json('/System/Info/Public')) as GetPublicSystemInfo.$200
	if (PublicSystemInfo.StartupWizardCompleted == false) {
		let wizardstart = `${PublicSystemInfo.LocalAddress}/web/index.html#!/wizardstart.html`
		// await opener(wizardstart)
		throw new Error(`StartupWizardCompleted == false -> ${wizardstart}`)
	}
	if (!ENV.get('API_KEY')) {
		let apikeys = `${PublicSystemInfo.LocalAddress}/web/index.html#!/apikeys.html`
		// await opener(apikeys)
		throw new Error(`Undefined API_KEY -> ${apikeys}`)
	}
	socket.start(PublicSystemInfo)
	await library.setVirtualFolders()
}
