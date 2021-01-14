import * as Rx from '../shims/rxjs.ts'
import cidrRegex from 'https://esm.sh/cidr-regex?dev'
import ipRegex from 'https://esm.sh/ip-regex?dev'
import isCidr from 'https://esm.sh/is-cidr?dev'
import isIp from 'https://esm.sh/is-ip?dev'
import RunCmdWorker from '../workers/RunCmdWorker.ts'

const worker = new RunCmdWorker(['jellyfin', '--service'], '\n\n')
export const rxJellyfin = worker.rx.pipe(
	// Rx.op.tap((chunk) => console.log('jellyfin chunk ->', chunk)),
	Rx.op.map((chunk) => {
		let regex = /^\[(?<dateiso>.+)\] \[(?<level>\w+)\] \[(?<source>.+)\] (?<message>.+)/
		let groups = chunk.match(regex)!.groups!
		let values = Array.from(groups.message.matchAll(/(?<value>".+")/g)).map((match) => {
			return match.groups!.value
		})
		return {
			level: groups.level as 'Debug' | 'Error' | 'Fatal' | 'Information' | 'Warning',
			message: groups.message,
			source: groups.source,
			stamp: new Date(groups.dateiso).valueOf(),
			values,
		}
	}),
	Rx.op.tap((line) => console.log('jellyfin line ->', line)),
	// Rx.op.tap((line) => console.log(JSON.stringify(line, null, 4))),
	Rx.op.share(),
)

export const rxListening = new Rx.BehaviorSubject('')
rxJellyfin.pipe(
	Rx.op.filter((line) => line.message.includes(' listening ')),
	Rx.op.map((line) => {
		return line.message.split(' ').slice(-1)[0]
	}),
	Rx.op.mergeMapTo(rxListening),
)

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
