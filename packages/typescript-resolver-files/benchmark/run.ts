/**
 * Benchmark runner for the `typescript-resolver-files` preset.
 *
 * Two layers:
 *  - `__single__`: in ONE fresh process, generate a workload, then run codegen
 *    twice — COLD (nothing generated yet) and WARM (output on disk + the preset's
 *    module-level ts-morph Project singleton reused, i.e. a watch re-run). Emits
 *    one JSON line of per-phase timings for both.
 *  - orchestrator (default): spawns `__single__` N times (each a genuine cold
 *    process), aggregates median/min/max per phase and total, prints a table.
 *
 * Per-phase timings come from graphql-codegen's own profiler: the preset already
 * wraps every phase in `profiler.run(fn, name)`. We inject our OWN recording
 * profiler onto the context and read its events back.
 *
 * We deliberately do not use `context.useProfiler()` / the built-in
 * `createProfiler()`: in codegen CLI >= 7.3.x `generate()` flushes a profiler
 * that has an `outputName` to a trace file and then calls `profiler.clear()`,
 * which would both litter a `codegen-*.json` and wipe events before we read
 * them. Our profiler reports `outputName: null`, so that flush/clear no-ops.
 */
import { spawnSync } from 'child_process';
import { performance } from 'perf_hooks';
import * as fs from 'fs';
import * as path from 'path';
import { CodegenContext, generate } from '@graphql-codegen/cli';
import config from './codegen.js';
import {
  workloadPresets,
  generateWorkload,
  defaultWorkloadDir,
} from './generateSchema.js';

/** Minimal profiler matching the `context.profiler` shape used across CLI versions. */
interface RecordingProfiler {
  outputName: null;
  run<T>(fn: () => T | Promise<T>, name: string): Promise<T>;
  collect(): { name: string; dur: number }[];
  clear(): void;
}

const createRecordingProfiler = (): RecordingProfiler => {
  const events: { name: string; dur: number }[] = [];
  return {
    outputName: null,
    async run(fn, name) {
      const start = performance.now();
      const value = await fn();
      // dur in microseconds, matching graphql-codegen's ProfilerEvent.
      events.push({ name, dur: (performance.now() - start) * 1000 });
      return value;
    },
    collect: () => events,
    clear: () => {
      events.length = 0;
    },
  };
};

const PRESET_PREFIX = '[@eddeee888/gcg-typescript-resolver-files]:';
const RESULT_SENTINEL = '__BENCH_RESULT__';

interface RunTimings {
  wallMs: number;
  phases: Record<string, number>; // phase name -> ms
}
interface SingleResult {
  preset: string;
  stats: { modules: number; types: number; mappers: number };
  cold: RunTimings;
  warm: RunTimings;
  warmMapperChanged: RunTimings;
}

/**
 * Edit one mapper file on disk so its contents (and therefore the phase-7 cache
 * key) change. Used to measure the cache-miss path: the ts-morph project is still
 * warm, but `getGraphQLObjectTypeResolversToGenerate` must recompute.
 */
const changeOneMapperFile = (modulesDir: string): void => {
  for (const entry of fs.readdirSync(modulesDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) {
      continue;
    }
    const dir = path.join(modulesDir, entry.name);
    const mapperFile = fs
      .readdirSync(dir)
      .find((f) => f.endsWith('.mappers.ts'));
    if (mapperFile) {
      fs.appendFileSync(
        path.join(dir, mapperFile),
        `\n// benchmark: mapper edited at ${Date.now()}\n`
      );
      return;
    }
  }
  throw new Error('No mapper file found to edit');
};

/**
 * Run codegen once against the current on-disk state, returning the wall time
 * and per-phase timings. Cold vs warm is decided by the caller (i.e. by whether
 * output already exists), not here.
 */
const runProfiledGenerate = async (): Promise<RunTimings> => {
  const context = new CodegenContext({ config: { ...config, silent: true } });
  // Inject our recording profiler (see file header for why not `useProfiler()`).
  context.profiler =
    createRecordingProfiler() as unknown as typeof context.profiler;

  const start = performance.now();
  await generate(context, true);
  const wallMs = performance.now() - start;

  const phases: Record<string, number> = {};
  for (const event of context.profiler.collect()) {
    if (event.name?.startsWith(PRESET_PREFIX)) {
      const phase = event.name.slice(PRESET_PREFIX.length).trim();
      // dur is microseconds; sum in case a phase is entered more than once.
      phases[phase] = (phases[phase] ?? 0) + event.dur / 1000;
    }
  }
  return { wallMs, phases };
};

/**
 * Produce one data point for a preset. In its own process (so COLD is genuinely
 * cold), measure three runs:
 *  - COLD: nothing generated yet.
 *  - WARM: output on disk + the ts-morph Project singleton reused, and nothing
 *    changed -> the phase-7 cache HITS (watch re-run after editing a resolver).
 *  - WARM + mapper changed: a mapper file is edited between runs, so the phase-7
 *    cache MISSES and it recomputes (watch re-run after editing a mapper).
 */
const run = async (presetName: string): Promise<SingleResult> => {
  const preset = workloadPresets[presetName];
  if (!preset) {
    throw new Error(
      `Unknown preset "${presetName}". Available: ${Object.keys(
        workloadPresets
      ).join(', ')}`
    );
  }
  const { modulesDir, stats } = generateWorkload({
    preset,
    workloadDir: defaultWorkloadDir(),
  });

  const cold = await runProfiledGenerate(); // nothing on disk -> cold
  const warm = await runProfiledGenerate(); // unchanged -> phase-7 cache hit

  changeOneMapperFile(modulesDir); // invalidate the phase-7 cache key
  const warmMapperChanged = await runProfiledGenerate(); // cache miss -> recompute

  return { preset: presetName, stats, cold, warm, warmMapperChanged };
};

// ---------- orchestrator ----------

const median = (xs: number[]): number => {
  const s = [...xs].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
};
const fmt = (n: number): string => n.toFixed(1).padStart(8);

/**
 * Ordered union of phase names seen across `runs`. Derived from the data (not a
 * hardcoded list) so it always matches whatever phases the preset currently
 * emits. Each run's `phases` keys are already in execution order — the profiler
 * records the preset's sequential phases in completion order — so preserving
 * first-seen order across runs keeps the table in preset order.
 */
const collectPhaseOrder = (runs: RunTimings[]): string[] => {
  const order: string[] = [];
  const seen = new Set<string>();
  for (const r of runs) {
    for (const phase of Object.keys(r.phases)) {
      if (!seen.has(phase)) {
        seen.add(phase);
        order.push(phase);
      }
    }
  }
  return order;
};

const printTable = (label: string, runs: RunTimings[]): void => {
  const phaseOrder = collectPhaseOrder(runs);
  console.log(`\n=== ${label} (n=${runs.length}) ===`);
  console.log(
    `${'phase'.padEnd(42)}${'median'.padStart(8)}${'min'.padStart(
      8
    )}${'max'.padStart(8)}   (ms)`
  );
  for (const phase of phaseOrder) {
    const vals = runs.map((r) => r.phases[phase] ?? 0);
    console.log(
      `${phase.padEnd(42)}${fmt(median(vals))}${fmt(Math.min(...vals))}${fmt(
        Math.max(...vals)
      )}`
    );
  }
  const phaseSum = runs.map((r) =>
    phaseOrder.reduce((acc, p) => acc + (r.phases[p] ?? 0), 0)
  );
  const wall = runs.map((r) => r.wallMs);
  console.log(
    `${'— preset phases subtotal'.padEnd(42)}${fmt(median(phaseSum))}${fmt(
      Math.min(...phaseSum)
    )}${fmt(Math.max(...phaseSum))}`
  );
  console.log(
    `${'— total generate() wall'.padEnd(42)}${fmt(median(wall))}${fmt(
      Math.min(...wall)
    )}${fmt(Math.max(...wall))}`
  );
};

const orchestrate = async (
  presetName: string,
  iterations: number
): Promise<void> => {
  const results: SingleResult[] = [];
  console.log(
    `Benchmarking preset "${presetName}" x${iterations} cold processes...`
  );
  for (let i = 0; i < iterations; i++) {
    const child = spawnSync(
      process.execPath,
      ['--import', 'tsx', import.meta.filename, '__single__', presetName],
      {
        cwd: process.cwd(),
        encoding: 'utf8',
        maxBuffer: 64 * 1024 * 1024,
        env: {
          ...process.env,
          // The type-checker path is memory-hungry on large schemas; give each
          // cold process headroom. `xlarge` may still exhaust this (see README).
          NODE_OPTIONS:
            '--conditions=@workspace/source --max-old-space-size=4096',
        },
      }
    );
    if (child.status !== 0) {
      console.error(child.stdout);
      console.error(child.stderr);
      throw new Error(`Iteration ${i + 1} failed`);
    }
    const line = child.stdout
      .split('\n')
      .find((l) => l.startsWith(RESULT_SENTINEL));
    if (!line) {
      console.error(child.stdout);
      throw new Error(`Iteration ${i + 1}: no result line`);
    }
    results.push(JSON.parse(line.slice(RESULT_SENTINEL.length)));
    process.stdout.write('.');
  }
  console.log('');

  const stats = results[0].stats;
  console.log(
    `\nWorkload: ${stats.modules} modules, ${stats.types} object types, ${stats.mappers} mappers`
  );

  printTable(
    'COLD (first run)',
    results.map((r) => r.cold)
  );
  printTable(
    'WARM (watch re-run, nothing changed — cache hit)',
    results.map((r) => r.warm)
  );
  printTable(
    'WARM (watch re-run, mapper changed — cache miss)',
    results.map((r) => r.warmMapperChanged)
  );
};

// ---------- entry ----------

const main = async (): Promise<void> => {
  const [arg0, arg1] = process.argv.slice(2);
  if (arg0 === '__single__') {
    // `||` (not `??`): Nx interpolates absent `{args.*}` to an empty string.
    const result = await run(arg1 || 'large');
    console.log(RESULT_SENTINEL + JSON.stringify(result));
    return;
  }
  const presetName = arg0 || 'large';
  const iterations = Number(arg1 || '5');
  await orchestrate(presetName, iterations);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
