import * as what from 'https://deno.land/x/is_what/src/index.ts'

export function toHashId(string: string) {
	let [hash, i, char] = [0, 0, 0]
	for (i = 0; i < string.length; i++) {
		char = string.charCodeAt(i)
		hash = (hash << 5) - hash + char
		hash |= 0
	}
	return Math.abs(hash)
}

export function random(length = 8) {
	// if (!Number.isSafeInteger(length)) {
	// 	throw new TypeError(`!Number.isSafeInteger(length = ${length})`)
	// }
	length = Math.ceil(Math.abs(length))
	if (length == 0) return ''
	let chars = ''
	while (chars.length < length) {
		chars += Math.random().toString(36).slice(-8)
	}
	return chars.slice(0, -(8 - (length % 8)))
}

