import * as jellyfin from './jellyfin.ts'

export async function start() {
	let config = (await jellyfin.api.get('/Startup/Configuration')) as StartupConfiguration
	config.PreferredMetadataLanguage ||= config.UICulture.split('-')[0]
	let user = (await jellyfin.api.get('/Startup/User')) as StartupUser
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
