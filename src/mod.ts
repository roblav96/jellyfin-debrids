import './devops/console.ts'
import * as dotenv from './config/dotenv.ts'
import * as graylog from './graylog/graylog.ts'
import * as jellyfin from './jellyfin/jellyfin.ts'

queueMicrotask(async function load() {
	await dotenv.config()
	graylog.start()
	await jellyfin.load()
})
