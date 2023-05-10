import sockette from 'https://esm.sh/sockette?dev'

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

export var Sockette = (sockette as any) as typeof Sockette
