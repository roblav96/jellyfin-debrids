import * as assertion_error from 'https://deno.land/std/node/assertion_error.ts'
import * as asserts from 'https://deno.land/std/testing/asserts.ts'
import * as colors from 'https://deno.land/std/fmt/colors.ts'
import * as datetime from 'https://deno.land/std/datetime/mod.ts'
import * as log from 'https://deno.land/std/log/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
import * as printf from 'https://deno.land/std/fmt/printf.ts'
import * as util from 'https://deno.land/std/node/util.ts'
import { intercept } from 'https://deno.land/x/function_intercept/index.ts'

// @deno-types='https://cdn.skypack.dev/pretty-ms/dist=es2020,mode=types/index.d.ts'
import ms from 'https://cdn.skypack.dev/pretty-ms?dts'

const ROOT_CWD = path.parse(path.parse(Deno.mainModule).dir).dir
const DEFAULT_INSPECT_OPTIONS = {
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

let nowstamp = performance.now()
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
							if (frame.includes(`${ROOT_CWD}/`)) {
								frame = frame.replace(`${ROOT_CWD}/`, '')
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
				let delta = now - nowstamp
				nowstamp = now
				let timestamp = ms(delta, { compact: true, formatSubMilliseconds: true })

				let symbol = ({ log: '🔵', warn: '🟠', error: '🔴' } as any)[level] as string
				args.unshift(`   ${colors.dim(`${stack} +${timestamp}`)}\n${symbol}`)
				args.push('\n')

				return Reflect.apply(method, ctx, args)
			},
		}),
	})
}

declare global {
	namespace Deno {
		var core: any
		var internal: symbol
	}
}
