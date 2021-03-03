export function allKeys<T>(object: T) {
	let keys = new Set<string>()
	let ignore = new Set(['__proto__', 'constructor', 'prototype'])
	do {
		let properties = Object.getOwnPropertyNames(object).concat(
			(Object.getOwnPropertySymbols(object) as any) as string[],
		)
		for (let property of properties) {
			if (ignore.has(property)) continue
			if (property in object) keys.add(property)
		}
	} while ((object = Object.getPrototypeOf(object)) && object != Object.prototype)
	return Array.from(keys) as (keyof T)[]
}
export function allEntries<T>(object: T) {
	return allKeys(object).map((key) => [key, object[key]]) as [keyof T, T[keyof T]][]
}
