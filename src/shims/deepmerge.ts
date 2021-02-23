import deepmerge from 'https://esm.sh/deepmerge'

export default (function (x = {}, y = {}) {
	// return deepmerge(x, y, { isMergeableObject: iswhat.isPlainObject })
	return deepmerge(x, y, {
		isMergeableObject(value) {
			return ['Array', 'Object'].includes(Object.prototype.toString.call(value).slice(8, -1))
		},
		// import * as what from 'https://deno.land/x/is_what/src/index.ts'
		// isMergeableObject: (value) => {
		// 	if ((!!value && typeof value == 'object') == false) return false
		// 	if (Array.isArray(value)) return true
		// 	if (what.isPlainObject(value)) return true
		// 	return false
		// 	// if (Object.prototype.toString.call(value).slice(8, -1) == 'Object') return true
		// 	// if (!what.isAnyObject(value)) return false
		// 	// return what.isPlainObject(value)
		// 	// return Object.prototype.toString.call(value).slice(8, -1) != 'Object'
		// },
	})
} as typeof import('https://esm.sh/deepmerge/index.d.ts'))
