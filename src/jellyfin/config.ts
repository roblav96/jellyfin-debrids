import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

let Public = (await (
	await fetch('http://127.0.0.1:18096/System/Info/Public')
).json()) as SystemInfoPublic
Deno.env.set('DEVICE_ID', Public.Id)

if (!Deno.env.get('API_KEY')) {
	console.error('Undefined API_KEY ->', 'http://localhost:8096/web/index.html#!/apikeys.html')
}
// if (api_key) {
// 	let Info = (await (
// 		await fetch(`http://127.0.0.1:18096/System/Info?api_key=${api_key}`)
// 	).json()) as SystemInfo
// 	Deno.env.set('WEB_SOCKET_PORT_NUMBER', Info.WebSocketPortNumber.toString())
// }

export interface SystemInfoPublic {
	Id: string
	LocalAddress: string
	OperatingSystem: string
	ProductName: string
	ServerName: string
	StartupWizardCompleted: boolean
	Version: string
}

export interface SystemInfo {
	CachePath: string
	CanLaunchWebBrowser: boolean
	CanSelfRestart: boolean
	CompletedInstallations: any[]
	EncoderLocation: string
	HasPendingRestart: boolean
	HasUpdateAvailable: boolean
	Id: string
	InternalMetadataPath: string
	IsShuttingDown: boolean
	ItemsByNamePath: string
	LocalAddress: string
	LogPath: string
	OperatingSystem: string
	OperatingSystemDisplayName: string
	ProgramDataPath: string
	ServerName: string
	SupportsLibraryMonitor: boolean
	SystemArchitecture: string
	TranscodingTempPath: string
	Version: string
	WebPath: string
	WebSocketPortNumber: number
}
