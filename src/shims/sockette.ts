// import 'https://esm.sh/sockette/sockette.d.ts?dev'
// import type Sockette from 'sockette'
// import sockette from 'https://esm.sh/sockette?dev'
// export default sockette as typeof Sockette
// export default (sockette as any) as typeof import('https://esm.sh/sockette/sockette.d.ts')

// declare module 'https://esm.sh/sockette?dev&no-check' {
// 	export var export_default: any
// 	export { export_default as default }
// }
export namespace Sockette {
	export interface Options<T> {
		protocols: string | string[]
		timeout: number
		maxAttempts: number
		onopen: (event: Event) => void
		onmessage: (event: MessageEvent<T>) => void
		onreconnect: (event: CloseEvent) => void
		onmaximum: (event: CloseEvent) => void
		onclose: (event: CloseEvent) => void
		onerror: (event: ErrorEvent) => void
	}
}

export interface Sockette<T> {
	send(data: any): void
	json(data: Partial<T>): void
	close(code?: number, reason?: string): void
	reconnect(): void
	open(): void
}
export declare var Sockette: {
	new <T>(url: string, options: Partial<Sockette.Options<T>>): Sockette<T>
}
// export declare class Sockette<T> {
// 	constructor(url: string, options: Partial<Sockette.Options<T>>)
// }
// export default Sockette
// }

// export { default as Sockette } from 'https://esm.sh/sockette/dist/sockette.mjs?dev'

import sockette from 'https://esm.sh/sockette'
// console.log('sockette ->', sockette.toString())
export var Sockette = (sockette as any) as typeof Sockette
// @ts-ignore
// export { Sockette }
// export default (sockette as any) as typeof Sockette
