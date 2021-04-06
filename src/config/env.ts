import * as dotenv from 'https://deno.land/x/dotenv/mod.ts'
import * as flags from 'https://deno.land/std/flags/mod.ts'
import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
import decamelize from 'https://esm.sh/decamelize?dev'
import onetime from 'https://esm.sh/onetime?dev'

const DEFAULTS = {
	//

	JELLYFIN_API_KEY: '',
	JELLYFIN_GRAYLOG_PORT: '12201',
	JELLYFIN_PORT: '8096',

	//

	ALLDEBRID_AGENT: '',
	ALLDEBRID_FOLDER: '',
	ALLDEBRID_KEY: '',
	IPTV_MEMORIAL_S: '',
	IPTV_MEMORIAL_U: '',
	OFFCLOUD_KEY: '',
	ORION_APP: '',
	ORION_KEY: '',
	PREMIUMIZE_ID: '',
	PREMIUMIZE_PIN: '',
	REALDEBRID_ID: '',
	REALDEBRID_SECRET: '',

	//

	FANART_KEY: '184e1a2b1fe3b94935365411f919f638',
	OMDB_KEY: '2c9d9507',
	SIMKL_ID: '',
	SIMKL_SECRET: '',
	TMDB_KEY: '4219e299c89411838049ab0dab19ebd5',
	TRAKT_CLIENT_ID: '',
	TRAKT_CLIENT_SECRET: '',
	TVDB_KEY: 'OG4V3YJ3FAP7FP2K',
	TVDB_TOKEN: '',
	TVMAZE_KEY: '',

	//
}

const dotvars = onetime(() => {
	let dotvars = {} as Record<string, string>
	let envpaths = new Set([
		path.dirname(path.dirname(path.dirname(path.fromFileUrl(import.meta.url)))),
		Deno.cwd(),
	])
	for (let envpath of Array.from(envpaths).filter(Boolean)) {
		let envfile = path.join(envpath, '.env')
		if (fs.existsSync(envfile)) {
			Object.assign(dotvars, dotenv.parse(Deno.readTextFileSync(envfile)))
		}
	}
	return dotvars
})

export function get(envkey: keyof typeof DEFAULTS, fallback?: string) {
	for (let [key, value] of Object.entries(flags.parse(Deno.args) as Record<string, string>)) {
		if (key == '_') continue
		if (decamelize(key, { separator: '_' }).toUpperCase() == envkey) {
			value = (value ?? '').toString()
			if (value.length > 0) {
				return value
			}
		}
	}
	let value = Deno.env.get(envkey)
	if (typeof value == 'string' && value.length > 0) {
		return value
	}
	for (let [key, value] of Object.entries(dotvars())) {
		if (key.toUpperCase() == envkey) {
			if ((value ?? '').length > 0) {
				return value
			}
		}
	}
	if ((DEFAULTS[envkey] ?? '').length > 0) {
		return DEFAULTS[envkey]
	}
	return fallback
}
