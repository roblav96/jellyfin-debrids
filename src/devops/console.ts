import * as colors from 'https://deno.land/std/fmt/colors.ts'
import * as datetime from 'https://deno.land/std/datetime/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
import ansi from 'https://esm.sh/ansi-regex?dev'
import ms from 'https://esm.sh/pretty-ms?dev'

const LOG_SYMBOLS = {
	log: '🔵',
	info: '🟢',
	warn: '🟠',
	error: '🔴',
} as const

const DEFAULT_INSPECT_OPTIONS = {
	colors: true,
	compact: true,
	depth: 4,
	getters: true,
	iterableLimit: 128,
	showHidden: true,
	showProxy: true,
	sorted: true,
	trailingComma: false,
} as Deno.InspectOptions

const ANSI_REGEX = ansi({ onlyFirst: true })
const EOL_REGEX = /(?:\r?\n)/

let root_path = path.dirname(path.dirname(path.fromFileUrl(import.meta.url)))
try {
	if (Deno.mainModule) {
		root_path = path.dirname(path.fromFileUrl(Deno.mainModule))
		Deno.core.print(`\n████  ${datetime.format(new Date(), 'hh:mm:ss a')}  ████\n\n`)
	}
	Deno.cwd() && (root_path = Deno.cwd())
} catch {}

let now_stamp = performance.now()
for (let [level, symbol] of Object.entries(LOG_SYMBOLS) as [keyof typeof LOG_SYMBOLS, string][]) {
	Object.assign(console, {
		[level]: new Proxy(console[level], {
			apply(method, ctx: Console, args: string[]) {
				let delta = performance.now() - now_stamp

				let e = { stack: '' }
				Error.captureStackTrace(e, this.apply)
				let lines = e.stack.split('\n').filter((line) => {
					return !line.includes(import.meta.url)
				})
				if (!lines[1]) {
					// Deno.core.print('\n🟡 !lines[1] -> ' + e.stack + '\n\n')
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
								/[(]?<(.+)>:(\d+):(\d+)[)]?/,
								`$1:${colors.yellow('$2')}:${colors.yellow('$3')}`,
							)
						} else {
							frame = frame.replace(/(<.+>)/, `${colors.cyan('$1')}`)
						}
						stacks[i] = frame
					}
				}
				for (let i = 0; i < stacks.length; i++) {
					let stack = stacks[i]
					if (stack == 'at') stacks[i] = ''
					if (stack.startsWith('(') && stack.endsWith(')')) stacks[i] = stack.slice(1, -1)
				}
				stacks.unshift(...stacks.splice(-1, 1))
				stack = stacks.filter(Boolean).join(' ')

				for (let i = 0; i < args.length; i++) {
					let arg = args[i]
					if (typeof arg == 'string') {
						if (i == 0) {
							if (level == 'error') {
								args[i] = colors.bgRed(colors.bold(arg))
							}
							continue
						}
						if (ANSI_REGEX.test(arg)) continue
						if (EOL_REGEX.test(arg)) continue
						if (arg != arg.trim()) continue
					}
					// if (typeof arg == 'object' && Object.keys(arg).length == 0) {
					// 	let keys = Reflect.ownKeys((arg as object)?.constructor?.prototype ?? {})
					// 	if (keys.length > 0) {
					// 		args[i] = Deno.inspect(
					// 			keys.reduce((target, key, index) => {
					// 				return Object.assign(target, { [key]: (arg as any)[key] })
					// 			}, {}),
					// 			DEFAULT_INSPECT_OPTIONS,
					// 		)
					// 		continue
					// 	}
					// }
					args[i] = Deno.inspect(arg, DEFAULT_INSPECT_OPTIONS)
				}

				if (!stack.startsWith('http') || level == 'error') {
					let timestamp = ms(delta, { compact: true, formatSubMilliseconds: true })
					let header = `${symbol} ${colors.dim(`${stack} +${timestamp}`)}`
					args[0] = `${header}\n${args[0]}`
				}
				if (level == 'error') {
					args[0] = `\n${args[0]}`
				}
				args.push('\n')

				now_stamp = performance.now()
				// @ts-ignore
				return Reflect.apply(...arguments)
			},
		}),
	})
}

const TIMERS = new Map()
Object.assign(console, {
	time(label) {
		label = String(label)
		if (TIMERS.has(label)) {
			return console.warn(`Timer '${label}' already exists`)
		}
		TIMERS.set(label, performance.now())
	},
	timeEnd(label) {
		label = String(label)
		if (!TIMERS.has(label)) {
			return console.warn(`Timer '${label}' does not exist`)
		}
		let duration = performance.now() - TIMERS.get(label)
		TIMERS.delete(label)
		console.info(`${label}: ${ms(duration, { compact: true, formatSubMilliseconds: true })}`)
	},
	async dts(data, identifier) {
		let dts = await (import(`${'https://esm.sh/dts-generate?dev&no-check'}`) as Promise<
			typeof import('https://esm.sh/dts-generate/dist/index.d.ts')
		>)
		let output = dts.generate(data, identifier)
		console.log(output)
		return output
	},
} as Console)

declare global {
	interface Console {
		dts(data: unknown, identifier?: string): Promise<string>
		indentLevel: number
	}
	var closed: boolean
	namespace Deno {
		interface Core {
			evalContext(content: string, filename?: string): [Promise<unknown>, unknown]
			jsonOpSync<T>(name: string, params: T): unknown
			ops(): Record<string, number>
			print(msg: string, code?: number): void
			registerErrorClass(name: string, ctor: typeof Error): void
		}
		var core: Core
		var internal: symbol
	}
}
