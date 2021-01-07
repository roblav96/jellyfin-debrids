import * as colors from 'https://deno.land/std/fmt/colors.ts'
import * as datetime from 'https://deno.land/std/datetime/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

export const ROOT_PATH = path.dirname(path.dirname(Deno.mainModule))
export const DEFAULT_INSPECT_OPTIONS = {
	colors: true,
	compact: false,
	depth: 4,
	getters: true,
	iterableLimit: Infinity,
	showProxy: true,
	sorted: true,
	trailingComma: false,
} as Deno.InspectOptions

Deno.core.print(`\n████  ${datetime.format(new Date(), 'hh:mm:ss a')}  ████\n\n`)

let now_stamp = Date.now()
for (let level of ['log', 'warn', 'error'] as (keyof typeof console)[]) {
	Object.assign(console, {
		[level]: new Proxy(console[level], {
			apply(method, ctx: Console, args: string[]) {
				let e = { stack: '' }
				Error.captureStackTrace(e, this.apply)
				let stack = e.stack.split('\n')[1].trim()
				let stacks = stack.split(' ')
				for (let i = 0; i < stacks.length; i++) {
					if (i == 0) {
						stacks[i] = stacks[i]
					} else if (i < stacks.length - 1) {
						stacks[i] = colors.italic(colors.bold(stacks[i]))
					} else if (i == stacks.length - 1) {
						let frame = stacks[i]
						if (frame.includes('file:')) {
							if (frame.includes(`${ROOT_PATH}/`)) {
								frame = frame.replace(`${ROOT_PATH}/`, '')
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

				let now = Date.now()
				let delta = now - now_stamp
				now_stamp = now

				let symbol = ({ log: '🔵', warn: '🟠', error: '🔴' } as any)[level] as string
				args.unshift(`   ${colors.dim(`${stack} +${delta}ms`)}\n${symbol}`)
				args.push('\n')

				return Reflect.apply(method, ctx, args)
			},
		}),
	})
}

globalThis.addEventListener('error', (error) => {
	console.error(colors.bgRed('[GLOBAL ERROR]'), error)
})

declare global {
	namespace Deno {
		var core: any
		var internal: symbol
	}
}
