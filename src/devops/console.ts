import * as colors from 'https://deno.land/std/fmt/colors.ts'
import * as datetime from 'https://deno.land/std/datetime/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
import ms from 'https://esm.sh/pretty-ms?dev'

const LOG_SYMBOLS = {
	log: '🔵',
	info: '🟢',
	warn: '🟠',
	error: '🔴',
} as Record<keyof typeof console, string>

const DEFAULT_INSPECT_OPTIONS = {
	colors: true,
	compact: true,
	depth: 4,
	getters: true,
	indentLevel: 4,
	iterableLimit: 100,
	showProxy: true,
	sorted: true,
	trailingComma: false,
} as Deno.InspectOptions

let root_path = Deno.env.get('ROOT_PATH')!
if (Deno.mainModule) {
	if (!root_path) {
		root_path = path.dirname(path.dirname(Deno.mainModule)).replace('file://', '')
		Deno.env.set('ROOT_PATH', root_path)
	}
	Deno.core.print(`\n████  ${datetime.format(new Date(), 'hh:mm:ss a')}  ████\n\n`)
}

let now_stamp = performance.now()
for (let [level, symbol] of Object.entries(LOG_SYMBOLS) as [keyof typeof console, string][]) {
	Object.assign(console, {
		[level]: new Proxy(console[level], {
			apply(method, ctx: Console, args: string[]) {
				let e = { stack: '' }
				Error.captureStackTrace(e, this.apply)
				let lines = e.stack.split('\n')
				if (!lines[1]) {
					Deno.core.print('\n🟡 !lines[1] -> ' + e.stack + '\n\n')
					Error.captureStackTrace(e)
					lines = e.stack.split('\n')
				}
				// Deno.core.print('\n🟡 e.stack -> ' + e.stack + '\n\n')
				let stack = lines[1]?.trim() ?? ''
				let stacks = stack.split(' ')
				for (let i = 0; i < stacks.length; i++) {
					if (i == 0) {
						stacks[i] = stacks[i]
					} else if (i < stacks.length - 1) {
						stacks[i] = colors.italic(stacks[i])
					} else if (i == stacks.length - 1) {
						let frame = stacks[i]
						if (frame.includes('file:')) {
							if (frame.includes(`file://${root_path}/`)) {
								frame = frame.replace(`file://${root_path}/`, '')
							}
							frame = frame.replace(
								/<(.+)>:(\d+):(\d+)/,
								`$1:${colors.yellow('$2')}:${colors.yellow('$3')}`,
							)
						} else {
							frame = frame.replace(/(<.+>)/, `${colors.cyan('$1')}`)
						}
						stacks[i] = frame
					}
				}
				stack = stacks.join(' ')
				stack = stack.replace('at ', '')

				for (let i = 0; i < args.length; i++) {
					let arg = args[i]
					if (i == 0 && typeof arg == 'string') {
						continue
					}
					args[i] = Deno.inspect(arg, DEFAULT_INSPECT_OPTIONS)
				}

				let now = performance.now()
				let delta = now - now_stamp
				now_stamp = now
				let timestamp = ms(delta, { compact: true, formatSubMilliseconds: true })

				let header = `${symbol} ${colors.dim(`${stack} +${timestamp}`)}`
				args[0] = `${header}\n${args[0]}`
				if (level == 'error') {
					args[0] = `\n${args[0]}`
				}
				args.push('\n')

				// @ts-ignore
				return Reflect.apply(...arguments)
			},
		}),
	})
}

Object.assign(console, {
	async dts(data, identifier) {
		let dts = await (import(`${'https://esm.sh/dts-generate?dev&no-check'}`) as Promise<
			typeof import('https://esm.sh/dts-generate/dist/index.d.ts')
		>)
		let output = await dts.generate(data, identifier)
		console.log(output)
		return output
	},
} as Console)

declare global {
	interface Console {
		dts(data: unknown, identifier?: string): Promise<string>
	}
	const closed: boolean
	namespace Deno {
		interface Core {
			evalContext(content: string, filename?: string): [Promise<unknown>, unknown]
			jsonOpSync<T>(name: string, params: T): unknown
			ops(): void
			print(msg: string, code?: number): void
			registerErrorClass(name: string, ctor: typeof Error): void
		}
		const core: Core
		const internal: symbol
	}
}
