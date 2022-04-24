import * as jellyfin from './jellyfin.ts'

export async function start() {
	let config = (await jellyfin.api.json(
		'/Startup/Configuration',
	)) as Jellyfin.GetStartupConfiguration.$200
	console.log('config ->', config)
	config.PreferredMetadataLanguage ||= config.UICulture.split('-')[0]
	let user = (await jellyfin.api.json('/Startup/User')) as Jellyfin.GetFirstUser.$200
	user.Password = 'qwer1234'
	await jellyfin.api.post('/Startup/User', { json: user })
	await jellyfin.api.post('/Startup/RemoteAccess', {
		json: { EnableAutomaticPortMapping: false, EnableRemoteAccess: true },
	})
	await jellyfin.api.post('/Startup/Complete')
}

interface StartupConfiguration {
	MetadataCountryCode: string
	PreferredMetadataLanguage: string
	UICulture: string
}

interface StartupUser {
	Name: string
	Password: string
}
