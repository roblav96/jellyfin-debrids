import * as F from 'https://deno.land/x/fae/mod.ts'
import * as H from 'https://deno.land/x/hyurl_utils/mod.ts'
import * as Rx from '../shims/rxjs.ts'
import cidrRegex from 'https://esm.sh/cidr-regex?dev'
import ipRegex from 'https://esm.sh/ip-regex?dev'
import isCidr from 'https://esm.sh/is-cidr?dev'
import isIp from 'https://esm.sh/is-ip?dev'
import RunCmdWorker from '../workers/RunCmdWorker.ts'

export const worker = new RunCmdWorker(['jellyfin', '--service'], ['\n\n', '\n\n'])

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
	Rx.op.share(),
)

export const rxCdir = new Rx.BehaviorSubject('')
const rxListening = rxJellyfin.pipe(
	Rx.op.filter((line) => line.message.includes(' listening ')),
	// Rx.op.tap((line) => console.log('jellyfin line ->', line)),
	Rx.op.map((line) => line.values[0]),
	// Rx.op.mergeMapTo(rxListening),
)
rxListening.pipe(Rx.op.take(1), Rx.op.delay(1000)).subscribe((cdir) => rxCdir.next(cdir))
