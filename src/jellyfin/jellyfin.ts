export type { Components, Paths } from './openapi.d.ts'
import * as socket from './socket.ts'
import * as wizard from './wizard.ts'
import Db from '../adapters/storage.ts'
import type { Components, Paths } from './openapi.d.ts'
import { Http } from '../adapters/http.ts'
import { open as opener } from 'https://deno.land/x/opener/mod.ts'

export const db = new Db(import.meta.url)

export const api = new Http({
	buildRequest: [
		async (options) => {
			let port = Deno.env.get('JELLYFIN_LOCAL_PORT') || '8096'
			options.prefixUrl = `http://127.0.0.1:${port}`
			options.searchParams.api_key = Deno.env.get('JELLYFIN_API_KEY')!
		},
	],
})

export async function start() {
	let PublicSystemInfo = (await api.json(
		'/System/Info/Public',
	)) as Paths.GetPublicSystemInfo.Responses.$200
	if (PublicSystemInfo.StartupWizardCompleted == false) {
		let wizardstart = `${PublicSystemInfo.LocalAddress}/web/index.html#!/wizardstart.html`
		await opener(wizardstart)
		throw new Error(`StartupWizardCompleted == false -> ${wizardstart}`)
	}
	if (!Deno.env.get('JELLYFIN_API_KEY')) {
		let apikeys = `${PublicSystemInfo.LocalAddress}/web/index.html#!/apikeys.html`
		await opener(apikeys)
		throw new Error(`Undefined JELLYFIN_API_KEY -> ${apikeys}`)
	}
	socket.start(PublicSystemInfo)
}
