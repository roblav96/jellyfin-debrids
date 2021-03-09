import './devops/console.ts'
import * as graylog from './graylog/graylog.ts'
import * as jellyfin from './jellyfin/jellyfin.ts'

queueMicrotask(async () => {
	await graylog.connect()
	await jellyfin.start()
})
