import * as F from 'https://deno.land/x/fae/mod.ts'
import * as H from 'https://deno.land/x/hyurl_utils/mod.ts'
import * as Rx from '../shims/rxjs.ts'
import cidrRegex from 'https://esm.sh/cidr-regex?dev'
import ipRegex from 'https://esm.sh/ip-regex?dev'
import isCidr from 'https://esm.sh/is-cidr?dev'
import isIp from 'https://esm.sh/is-ip?dev'
import RunCmdWorker from '../workers/RunCmdWorker.ts'

const worker = new RunCmdWorker(['jellyfin', '--service'], '\n\n')

export const rxJellyfin = worker.rx.pipe(
	// Rx.op.tap((chunk) => console.log('jellyfin_worker chunk ->', chunk)),
	Rx.op.map((chunk) => {
		let regex = /^\[(?<datetime>\S+)\] \[(?<level>\w+)\] \[(?<context>.+)\] (?<message>.+)/
		let groups = chunk.match(regex)!.groups!
		let matches = Array.from(groups.message.matchAll(/"(?<value>.+)"/g))
		return {
			level: groups.level as 'Debug' | 'Error' | 'Fatal' | 'Information' | 'Warning',
			message: groups.message,
			context: groups.context,
			stamp: new Date(groups.datetime).valueOf(),
			values: matches.map((match) => match.groups!.value),
		}
	}),
	// Rx.op.tap((line) => console.log('jellyfin line ->', line)),
	// Rx.op.tap((line) => console.log(JSON.stringify(line, null, 4))),
	Rx.op.share(),
)

export const rxCdir = new Rx.BehaviorSubject('')
const rxListening = rxJellyfin.pipe(
	Rx.op.filter((line) => line.message.includes(' listening ')),
	// Rx.op.tap((line) => console.log('jellyfin line ->', line)),
	Rx.op.map((line) => line.values[0]),
	// Rx.op.mergeMapTo(rxListening),
)
rxListening.subscribe((cdir) => rxCdir.next(cdir))

// worker.rx.subscribe((chunk) => {
// 	// let regex = /^\[(?<stamp>.+)\] \[(?<level>[A-Z])\] (?<context>.+): (?<message>.+)/
// 	// for (let match of Array.from(chunk.matchAll(regex))) {
// 	// 	console.log(`${match.input} ->`, match.groups)
// 	// }
// 	// let matches = Array.from(chunk.matchAll(regex))
// 	// if (chunk.includes(' listening ')) {
// 	// 	console.warn('rxListening ->', chunk)
// 	// 	let splits = chunk.split(':').slice(-1).map((v) => v.split(' '))
// 	// 	console.log('splits ->', splits)
// 	// 	return rxListening.next(true)
// 	// }
// 	console.log('jellyfin chunk ->', chunk)
// })

// worker.addEventListener('message', function onJellyfinMessage(event) {
// 	if (event?.data?.chunk) {
// 		console.log('jellyfin_worker chunk ->', event.data.chunk)
// 	} else {
// 		console.log('jellyfin_worker event ->', event.data)
// 	}
// })
