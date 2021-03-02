import * as what from 'https://deno.land/x/is_what/src/index.ts'

export function allKeys(object: object) {
	let keys = new Set<string>()
	let ignore = new Set(['__proto__', 'constructor', 'prototype'])
	do {
		let properties = Object.getOwnPropertyNames(object).concat(
			Object.getOwnPropertySymbols(object).map((v) => v.toString()),
		)
		for (let property of properties) {
			if (ignore.has(property)) continue
			keys.add(property)
		}
	} while ((object = Object.getPrototypeOf(object)) && object != Object.prototype)
	return [...keys]
}

export function nonce() {
	return Math.random().toString(36).slice(-8)
}
