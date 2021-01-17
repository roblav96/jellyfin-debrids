import * as Rx from '../shims/rxjs.ts'
import { rxHttp } from './jellyfin.ts'

const rxSearch = rxHttp.pipe(
	Rx.op.filter(({ query }) => !!query.SearchTerm && !!query.UserId),
	Rx.op.map(({ query }) => ({
		SearchTerm: query.SearchTerm.toLowerCase().trim(),
		UserId: query.UserId,
	})),
	Rx.op.debounceTime(100),
	Rx.op.distinctUntilChanged((a, b) => {
		return a.SearchTerm == b.SearchTerm
	}),
	Rx.op.concatMap(async ({ SearchTerm, UserId }) => {
		console.log('SearchTerm ->', SearchTerm)
	}),
)
rxSearch.subscribe((search) => {
	// console.log('search ->', search)
})
