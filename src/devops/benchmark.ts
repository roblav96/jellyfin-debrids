// export * as default from 'https://deno.land/std/testing/bench.ts'
import * as bench from 'https://deno.land/std/testing/bench.ts'
import ms from 'https://esm.sh/pretty-ms?dev'
import { bold, green, magenta, yellow, gray } from 'https://deno.land/std/fmt/colors.ts'

// // type BenchmarkFunction = (start: () => void, stop: () => void) => void | Promise<void>
// interface BenchmarkFunction {
// 	// (): void | Promise<void>
// 	// (start?: () => void, stop?: () => void): void | Promise<void>
// 	(start: () => void, stop: () => void): void | Promise<void>
// 	// name: string
// }

const benchmarks = [] as (Omit<bench.BenchmarkDefinition, 'runs'> | bench.BenchmarkFunction)[]
// export function benchmark(benchmark: bench.BenchmarkDefinition | bench.BenchmarkFunction) {
export function benchmark(benchmark: typeof benchmarks[0]) {
	benchmarks.push(benchmark)
}

export async function runBenchmarks(options = {} as bench.BenchmarkRunOptions & { runs?: number }) {
	options = { silent: true, runs: 1000, ...options }

	for (let benchmark of benchmarks) {
		let func = typeof benchmark == 'function' ? benchmark : benchmark.func
		let autotimer = func.toString().split('\n')[0].endsWith('() {')
		bench.bench({
			name: benchmark.name,
			runs: options.runs,
			func: async ({ start, stop }) => {
				if (autotimer) start()
				await func({ start, stop })
				if (autotimer) stop()
			},
		})
	}

	if (options.silent == false) {
		return void (await bench.runBenchmarks(options)) as void
	}

	let nowstamp = performance.now()
	let { results } = await bench.runBenchmarks(options)
	let duration = performance.now() - nowstamp
	// let duration = results.reduce((sum, { totalMs }) => sum + totalMs, 0)
	const toMs = (t: number) => ms(t, { compact: true, formatSubMilliseconds: true })
	for (let { name, measuredRunsAvgMs, totalMs } of results) {
		let parts = [`\t${gray('Total:')}`, yellow(toMs(totalMs))]
		if (measuredRunsAvgMs < totalMs) {
			parts.unshift(`\t${gray('Average:')}`, yellow(toMs(measuredRunsAvgMs)))
		}
		console.debug('🟣', `${bold(magenta(name))}\n\t`, ...parts, '\n')
	}
	console.debug(
		`🟢 ${bold(green('DONE'))}\n\t\tRuns: ${yellow(`${options.runs}`)}\t\tTotal:`,
		bold(yellow(toMs(duration))),
	)

	//
}

//

// runBenchmarks({ silent: true }).then(({ results }) => {
// 	for (let { name, measuredRunsAvgMs, runsCount, totalMs } of results) {
// 		let parts = ['\tRuns:', runsCount, '\tAverage:', measuredRunsAvgMs, '\tTotal:', totalMs]
// 		console.info(name, '\n', ...parts)
// 	}
// })

// runBenchmarks({ silent: true }).then(({ results }) => {
// 	let table = {} as any
// 	for (let { name, measuredRunsAvgMs, runsCount, totalMs } of results) {
// 		table[name] = { Average: measuredRunsAvgMs, Runs: runsCount, Total: totalMs }
// 	}
// 	console.table(table)
// })

// runBenchmarks({ silent: true }, (progress) => {
// 	if (progress.state != ProgressState.BenchResult) return
// 	let { name, measuredRunsAvgMs, runsCount, totalMs } = progress.results.slice(-1)[0]
// 	let parts = ['\tRuns:', runsCount, '\tAverage:', measuredRunsAvgMs, '\tTotal:', totalMs]
// 	console.info(name, '\n', ...parts)
// })
