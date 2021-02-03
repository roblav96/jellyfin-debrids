import ky from 'https://esm.sh/ky/index.js?dev&no-check'
export default (ky as any) as typeof import('https://esm.sh/ky/index.d.ts').default
export type {
	AfterResponseHook as KyAfterResponseHook,
	BeforeRequestHook as KyBeforeRequestHook,
	BeforeRetryHook as KyBeforeRetryHook,
	BeforeRetryState as KyBeforeRetryState,
	Options as KyOptions,
	ResponsePromise as KyResponsePromise,
} from 'https://esm.sh/ky/index.d.ts'

// export type { default } from 'https://esm.sh/ky/index.d.ts'
// export { default } from 'https://esm.sh/ky/index.js?dev&no-check'
