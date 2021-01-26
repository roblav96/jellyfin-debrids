import * as Rx from '../shims/rxjs.ts'

export const RxBus = new Rx.Subject<string>()
