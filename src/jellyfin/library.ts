import * as Rx from '../shims/rxjs.ts'
import * as jellyfin from './jellyfin.ts'

jellyfin.api.get('Library/VirtualFolders').json()
