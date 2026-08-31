import { createRequire } from 'module';
import * as path from 'path';
import { pathToFileURL } from 'url';
import { defineConfig } from './defineConfig.js';

/**
 * `@graphql-codegen/cli`'s `overwrite` resolution (`normalizeOverwriteConfig`
 * in `generate-and-save.js`) looks up the matching `codegen.ts` `generates`
 * entry by doing an *exact* match on the per-file path Codegen is about to
 * write, then requires that entry to have a `plugins` key.
 *
 * The server preset's `generates` entry is keyed by `baseOutputDir` and has
 * no `plugins` key (the preset supplies plugins internally), while every
 * file it writes lives *underneath* that key. So the exact-match lookup
 * always misses and `overwrite.removeStaleFiles: false` from `defineConfig()`
 * (defineConfig.ts) is silently ignored - Codegen falls back to the global
 * default of `removeStaleFiles: true`, deleting resolver files in watch mode.
 *
 * This is only reachable through `@graphql-codegen/cli`'s internals (not
 * exported publicly), so this repo carries a `pnpm patch` for
 * `@graphql-codegen/cli` (see `patches/@graphql-codegen__cli@7.3.1.patch`)
 * that fixes the lookup and exposes `normalizeOverwriteConfig` for this test.
 */
async function loadNormalizeOverwriteConfig() {
  const require = createRequire(import.meta.url);
  const cliPackageJsonPath = require.resolve('@graphql-codegen/cli/package.json');
  const generateAndSavePath = path.join(
    path.dirname(cliPackageJsonPath),
    'esm',
    'generate-and-save.js'
  );
  const mod = await import(pathToFileURL(generateAndSavePath).href);
  return mod.normalizeOverwriteConfig as (
    config: { overwrite?: unknown; generates: Record<string, unknown> },
    outputPath: string
  ) => { removeStaleFiles: boolean; updateExistingFiles: boolean };
}

describe('server preset overwrite vs @graphql-codegen/cli stale file detection', () => {
  it('honors defineConfig()’s overwrite for a file nested under baseOutputDir', async () => {
    const normalizeOverwriteConfig = await loadNormalizeOverwriteConfig();
    const baseOutputDir = 'src/schema';
    const outputConfig = defineConfig({}, { baseOutputDir });

    const config = {
      overwrite: true, // global default codegen.ts would otherwise fall back to
      generates: {
        [baseOutputDir]: outputConfig,
      },
    };

    // A file the server preset actually writes, nested under baseOutputDir.
    const generatedFilePath = path.posix.join(
      baseOutputDir,
      'base',
      'resolvers',
      'Query',
      'user.ts'
    );

    expect(normalizeOverwriteConfig(config, generatedFilePath)).toEqual({
      removeStaleFiles: false,
      updateExistingFiles: true,
    });
  });

  it('still honors an exact-match generates key (non-preset outputs)', async () => {
    const normalizeOverwriteConfig = await loadNormalizeOverwriteConfig();
    const outputPath = 'src/generated.ts';
    const config = {
      overwrite: true,
      generates: {
        [outputPath]: {
          plugins: ['typescript'],
          overwrite: { removeStaleFiles: false, updateExistingFiles: false },
        },
      },
    };

    expect(normalizeOverwriteConfig(config, outputPath)).toEqual({
      removeStaleFiles: false,
      updateExistingFiles: false,
    });
  });

  it('falls back to the global overwrite for a path outside any generates entry', async () => {
    const normalizeOverwriteConfig = await loadNormalizeOverwriteConfig();
    const config = {
      overwrite: { removeStaleFiles: false, updateExistingFiles: false },
      generates: {
        'src/schema': defineConfig({}, { baseOutputDir: 'src/schema' }),
      },
    };

    expect(
      normalizeOverwriteConfig(config, 'some/unrelated/file.ts')
    ).toEqual({
      removeStaleFiles: false,
      updateExistingFiles: false,
    });
  });
});
