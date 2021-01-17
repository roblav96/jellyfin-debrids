import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
import * as Rx from '../shims/rxjs.ts'
import RunCmdWorker from '../workers/RunCmdWorker.ts'

let jellyfin_config_dir = Deno.env.get('JELLYFIN_CONFIG_DIR')!
if (!path.isAbsolute(jellyfin_config_dir)) {
	throw new TypeError(`JELLYFIN_CONFIG_DIR must be an absolute path -> '${jellyfin_config_dir}'`)
}
await fs.ensureDir(jellyfin_config_dir)

let root_configs_dir = path.join(Deno.env.get('ROOT_PATH')!, 'configs', 'jellyfin')
for await (let entry of fs.walk(root_configs_dir, { includeDirs: false })) {
	let jellyfin_file = path.join(jellyfin_config_dir, entry.name)
	if (!(await fs.exists(jellyfin_file))) {
		await fs.copy(path.join(root_configs_dir, entry.name), jellyfin_file)
	}
}

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
// rxJellyfin.subscribe((line) => {
// 	console.log('rxJellyfin line ->', line)
// })

const rxReady = new Rx.BehaviorSubject(false)
rxJellyfin
	.pipe(
		Rx.op.filter((line) => line.message.includes(' listening ')),
		Rx.op.take(1),
		Rx.op.delay(1000),
	)
	.subscribe(() => rxReady.next(true))
export async function run() {
	worker.run()
	await Rx.firstValueFrom(rxReady.pipe(Rx.op.filter((ready) => ready == true)))
}
