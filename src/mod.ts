import './devops/console.ts'
import * as dotenv from './config/dotenv.ts'
import * as graylog from './graylog/graylog.ts'
import * as jellyfin from './jellyfin/jellyfin.ts'

queueMicrotask(async () => {
	await dotenv.config()
	await graylog.connect()
	await jellyfin.start()
})
