// export * as default from 'https://deno.land/std/testing/bench.ts'
import * as bench from 'https://deno.land/std/testing/bench.ts'
import { bold, blue, green, magenta, yellow } from 'https://deno.land/std/fmt/colors.ts'

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

interface BenchmarkRunOptions extends bench.BenchmarkRunOptions {
	runs?: number
}
export async function runBenchmarks(options = {} as BenchmarkRunOptions) {
	options = { silent: true, runs: 10000, ...options }

	for (let benchmark of benchmarks) {
		let func = typeof benchmark == 'function' ? benchmark : benchmark.func
		let autotimer = func.toString().split('\n')[0].endsWith('() {')
		bench.bench({
			name: benchmark.name,
			runs: options.runs,
			func: async ({ start, stop }) => {
				autotimer == true && start()
				await func({ start, stop })
				autotimer == true && stop()
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
	console.log('duration ->', duration)
	for (let { name, measuredRunsAvgMs, totalMs } of results) {
		let parts = ['\tTotal:', yellow(totalMs.toFixed(4))]
		if (measuredRunsAvgMs < totalMs) {
			parts.unshift('\tAverage:', yellow(measuredRunsAvgMs.toFixed(4)))
		}
		console.debug('🟣', `${magenta(name)}\n\t`, ...parts, '\n')
	}

	console.debug(
		`🟢 ${bold(green('DONE'))}\n\t\t\t\t\t\t\tTotal:`,
		bold(yellow(duration.toFixed(4))),
	)
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
