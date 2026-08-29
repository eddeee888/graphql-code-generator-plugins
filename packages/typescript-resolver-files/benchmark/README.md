# Benchmark harness — `typescript-resolver-files` preset

Repeatable performance harness for measuring the preset's run time on a
realistically large schema. Dev-only; nothing here ships in the package.

## Why

The largest e2e fixture is ~155 lines, too small to measure anything. This
harness generates a synthetic `mode: 'modules'` schema (with diverging mappers,
so the type-checker path actually does work) and runs codegen against it,
capturing per-phase timings from graphql-codegen's own profiler — the preset
already wraps every phase in `profiler.run(fn, name)`.

## Usage

From the repo root:

```bash
pnpm nx benchmark typescript-resolver-files --preset=large --iterations=5
```

Both flags are optional (default `--preset=large --iterations=5`). The runner
generates the workload itself — `generateSchema.ts` is a utility module, not a
runnable script.

Presets (in `generateSchema.ts`): `small` (~20 types), `medium` (~100),
`large` (~200), `xlarge` (~400). **`xlarge` can exhaust the Node heap** — see
"Known limits" below.

### What it measures

Each iteration runs in a fresh child process and does codegen **three times**:

- **COLD** — nothing generated yet (true first run / CI).
- **WARM, cache hit** — output on disk + the preset's module-level ts-morph
  `Project` reused, and nothing changed, so the phase-7 result cache hits (a
  `--watch` re-run after editing a resolver implementation).
- **WARM, cache miss** — a mapper file is edited between runs, so the phase-7
  cache key changes and `getGraphQLObjectTypeResolversToGenerate` recomputes (a
  `--watch` re-run after editing a mapper). Cheaper than COLD because ts-morph is
  already warm, but not free like the cache hit.

The runner prints a per-phase median/min/max table for each, plus two totals:
`preset phases subtotal` (work inside the preset) and `total generate() wall`
(the whole pipeline, including downstream plugin rendering + file writes). The
gap between them is downstream codegen cost.

## Baseline findings (200-type `large`, this machine — indicative, not absolute)

The headline is that **cold-start is dominated by downstream codegen, not the
preset itself**:

| span                                                   | cold ms | notes                                        |
| ------------------------------------------------------ | ------- | -------------------------------------------- |
| total `generate()` wall                                | ~4400   |                                              |
| └ downstream `Codegen:` render                         | ~3900   | **~89% of cold time**                        |
| &nbsp;&nbsp;• resolver-file `add` outputs (~200)       | ~2600   | per-output codegen-core overhead × N outputs |
| &nbsp;&nbsp;• types-file render (typescript-resolvers) | ~1300   | same content phase 6 builds in ~55ms raw     |
| └ preset `Build Generates Section`                     | ~420    | phase 7 ~190, generateResolverFiles ~130     |

The downstream cost is **superlinear (~O(types²))**: the `Codegen:` span is
53ms / 956ms / 3739ms at 20 / 100 / 200 types (20→200 types = 10×, time = 70×).
The number of returned outputs grows ~linearly with types, and each output pays
a codegen-core cost that itself scales with schema size.

WARM re-runs are ~10× faster than cold (~390ms), thanks to the ts-morph
singleton and the "skip unchanged files" filter; there the preset's own phases
(`generateResolverFiles`/`postProcessFiles` ~110ms, phase 7 ~100ms) dominate.

## Known limits

- **`xlarge` (~400 types) can OOM** the default V8 heap during the phase-7
  type-checker path (`getGraphQLObjectTypeResolversToGenerate`, whose
  assignability checks against `Maybe<ResolversTypes['X']>` force the checker to
  instantiate the whole `ResolversTypes` map — ~O(types²) in memory). The runner
  gives child processes `--max-old-space-size=4096`; larger schemas need more,
  and it does not always help. This memory behaviour is itself a finding.
- Numbers are machine-relative — use them for **before/after deltas**, not
  absolute claims.

## Files

- `generateSchema.ts` — synthetic workload generator (+ presets).
- `codegen.ts` — codegen config pointing at the generated `.workload/`.
- `run.ts` — orchestrator + single-run measurement.
- `.workload/` — generated, gitignored.
