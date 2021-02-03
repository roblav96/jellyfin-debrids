import { Db } from '../adapters/storage.ts'
import { Http } from '../adapters/http.ts'
import { open } from 'https://deno.land/x/opener/mod.ts'

export const db = Db.fromUrl(import.meta.url)

export const api = new Http({
	prefixUrl: `http://127.0.0.1:${Deno.env.get('JELLYFIN_LOCAL_PORT') || 8096}`,
	// searchParams: 'api_key=1234',
	// searchParams: new URLSearchParams({
	// 	api_key: Deno.env.get('API_KEY') || '1234',
	// }),
	// searchParams: {
	// 	api_key: Deno.env.get('API_KEY') || '1234',
	// },
	// hooks: {
	// 	beforeRequestBefore: [
	// 		(request, options) => {
	// 			// console.log('options.searchParams ->', options.searchParams.toString())
	// 			// options.searchParams = 'api_key=9876'
	// 			// options.searchParams.append('api_key', Deno.env.get('API_KEY') || '9876')
	// 			options.searchParams = {}
	// 			options.searchParams['api_key'] = Deno.env.get('API_KEY') || '9876'
	// 			// Object.assign(options.searchParams, {
	// 			// 	api_key: Deno.env.get('API_KEY') || '9876',
	// 			// })
	// 			console.log('options.searchParams ->', options.searchParams)
	// 			console.log('request.url ->', request.url)
	// 			// return new Request(request)
	// 		},
	// 	],
	// },
})

export async function load() {
	// let port = Deno.env.get('JELLYFIN_LOCAL_PORT') || '8096'
	// let pubinfo = (await fetch(`http://127.0.0.1:${port}/System/Info/Public`))
	// console.log('pubinfo ->', pubinfo.url)
	let pubinfo = await api.get('/System/Info/Public') as SystemInfoPublic
	console.log('pubinfo ->', pubinfo)
}

const API_KEY = Deno.env.get('API_KEY')!
if (!API_KEY) {
	console.error('Undefined API_KEY ->', 'http://localhost:8096/web/index.html#!/apikeys.html')
}

export async function SystemInfoPublic() {
	return (await api.get('System/Info/Public')) as SystemInfoPublic
}

// if (api_key) {
// 	let Me = (await (
// 		await fetch(`http://127.0.0.1:18096/Users/Me?api_key=${api_key}`)
// 	).text())
// 	console.log('Me ->', Me)
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

export interface SystemConfiguration {
	ActivityLogRetentionDays: number
	AutoDiscovery: boolean
	AutoDiscoveryTracing: boolean
	BaseUrl: string
	CertificatePassword: string
	CertificatePath: string
	CodecsUsed: any[]
	ContentTypes: any[]
	CorsHosts: string[]
	DisableLiveTvChannelUserDataName: boolean
	DisablePluginImages: boolean
	DisplaySpecialsWithinSeasons: boolean
	EnableCaseSensitiveItemIds: boolean
	EnableDashboardResponseCaching: boolean
	EnableExternalContentInSuggestions: boolean
	EnableFolderView: boolean
	EnableGroupingIntoCollections: boolean
	EnableHttps: boolean
	EnableIPV4: boolean
	EnableIPV6: boolean
	EnableMetrics: boolean
	EnableMultiSocketBinding: boolean
	EnableNewOmdbSupport: boolean
	EnableNormalizedItemByNameIds: boolean
	EnableRemoteAccess: boolean
	EnableSSDPTracing: boolean
	EnableSimpleArtistDetection: boolean
	EnableSlowResponseWarning: boolean
	EnableUPnP: boolean
	GatewayMonitorPeriod: number
	HDHomerunPortRange: string
	HttpServerPortNumber: number
	HttpsPortNumber: number
	IgnoreVirtualInterfaces: boolean
	ImageExtractionTimeoutMs: number
	ImageSavingConvention: string
	IsPortAuthorized: boolean
	IsRemoteIPFilterBlacklist: boolean
	IsStartupWizardCompleted: boolean
	KnownProxies: any[]
	LibraryMetadataRefreshConcurrency: number
	LibraryMonitorDelay: number
	LibraryScanFanoutConcurrency: number
	LocalNetworkAddresses: any[]
	LocalNetworkSubnets: any[]
	LogFileRetentionDays: number
	MaxAudiobookResume: number
	MaxResumePct: number
	MetadataCountryCode: string
	MetadataNetworkPath: string
	MetadataOptions: {
		DisabledImageFetchers: string[]
		DisabledMetadataFetchers: string[]
		DisabledMetadataSavers: any[]
		ImageFetcherOrder: any[]
		ItemType: string
		LocalMetadataReaderOrder: any[]
		MetadataFetcherOrder: any[]
	}[]
	MetadataPath: string
	MinAudiobookResume: number
	MinResumeDurationSeconds: number
	MinResumePct: number
	PathSubstitutions: any[]
	PluginRepositories: {
		Enabled: boolean
		Name: string
		Url: string
	}[]
	PreferredMetadataLanguage: string
	PublicHttpsPort: number
	PublicPort: number
	PublishedServerUriBySubnet: any[]
	QuickConnectAvailable: boolean
	RemoteClientBitrateLimit: number
	RemoteIPFilter: any[]
	RemoveOldPlugins: boolean
	RequireHttps: boolean
	SSDPTracingFilter: string
	SaveMetadataHidden: boolean
	ServerName: string
	SkipDeserializationForBasicTypes: boolean
	SlowResponseThresholdMs: number
	SortRemoveCharacters: string[]
	SortRemoveWords: string[]
	SortReplaceCharacters: string[]
	TrustAllIP6Interfaces: boolean
	UDPPortRange: string
	UDPSendCount: number
	UDPSendDelay: number
	UICulture: string
	UPnPCreateHttpPortMap: boolean
	UninstalledPlugins: any[]
	VirtualInterfaceNames: string
}
