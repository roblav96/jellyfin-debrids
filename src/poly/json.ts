export function parse(text: string) {
	return Deno.core.deserialize(new Uint8Array(JSON.parse(text)))
}

export function stringify(value: any) {
	return JSON.stringify(Deno.core.serialize(value))
}

declare global {
	namespace Deno {
		interface Core {
			serialize(value: any): Uint8Array
			deserialize(value: Uint8Array): any
		}
		var core: Core
	}
}
