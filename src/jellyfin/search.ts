import * as Rx from 'https://esm.sh/rxjs?dev'
import { rxHttp } from './jellyfin.ts'

const rxSearch = rxHttp.pipe(
	Rx.filter(({ query }) => !!query.SearchTerm && !!query.UserId),
	Rx.map(({ query }) => ({
		SearchTerm: query.SearchTerm.toLowerCase().trim(),
		UserId: query.UserId,
	})),
	Rx.debounceTime(100),
	Rx.distinctUntilChanged((a, b) => {
		return a.SearchTerm == b.SearchTerm
	}),
	Rx.concatMap(async ({ SearchTerm, UserId }) => {
		console.log('SearchTerm ->', SearchTerm)
	}),
)
rxSearch.subscribe((search) => {
	// console.log('search ->', search)
})
