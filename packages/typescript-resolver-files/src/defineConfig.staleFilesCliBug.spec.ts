import { createRequire } from 'module';
import * as path from 'path';
import { pathToFileURL } from 'url';
import { executeCodegen } from '@graphql-codegen/cli';

/**
 * `@graphql-codegen/cli` used to resolve a generated file's `overwrite` option
 * (`normalizeOverwriteConfig` in `generate-and-save.js`) by looking the file's
 * own path up in `config.generates`, then requiring that entry to have a
 * `plugins` key.
 *
 * Neither holds for a preset-based output such as the server preset: its
 * `generates` entry is keyed by `baseOutputDir` (a directory it writes many
 * files into, and some generated paths are not even under it), and it has no
 * `plugins` key because the preset supplies plugins itself. So the lookup
 * always missed, and `overwrite.removeStaleFiles: false` from `defineConfig()`
 * was silently dropped in favour of Codegen's global default of
 * `removeStaleFiles: true` - deleting resolver files in watch mode.
 *
 * The fix carries the `generates` entry's `overwrite` on each generated file
 * (the same way `hooks` already was), so no path matching is needed at all.
 * This repo carries it as `patches/@graphql-codegen__cli@7.3.1.patch` until it
 * lands upstream.
 *
 * These tests exercise the CLI contract with a stub preset rather than the
 * server preset itself, so they stay independent of what the server preset
 * happens to emit. `defineConfig.spec.ts` covers the `overwrite` value the
 * server preset declares.
 */

const serverPresetOverwrite = {
  removeStaleFiles: false,
  updateExistingFiles: true,
};

const baseOutputDir = 'src/schema';

// Mirrors how the server preset emits files: many outputs from one `generates`
// entry keyed by a directory, including a path that is not under that directory.
const generatedFilenames = [
  `${baseOutputDir}/types.generated.ts`,
  `${baseOutputDir}/resolvers/Query/user.ts`,
  'resolvers/User.ts',
];

const stubPreset = {
  buildGeneratesSection: (options: Record<string, unknown>) =>
    generatedFilenames.map((filename) => ({
      ...options,
      filename,
      plugins: [],
      pluginMap: {},
    })),
};

describe('overwrite propagation through @graphql-codegen/cli', () => {
  it('tags every file a preset generates with the generates entry’s overwrite', async () => {
    const { result, error } = await executeCodegen({
      schema: 'type Query { user: User } type User { id: ID! name: String }',
      generates: {
        // No `plugins` key, keyed by a directory - exactly the server preset's shape.
        [baseOutputDir]: {
          preset: stubPreset,
          overwrite: serverPresetOverwrite,
        },
      },
    } as never);

    expect(error).toBeNull();
    expect(result.map((file) => file.filename)).toEqual(generatedFilenames);

    for (const file of result) {
      expect({
        filename: file.filename,
        overwrite: (file as { overwrite?: unknown }).overwrite,
      }).toEqual({
        filename: file.filename,
        overwrite: serverPresetOverwrite,
      });
    }
  });
});

/**
 * `normalizeOverwriteConfig` is internal to `generate-and-save.js`; the patch
 * adds a named export so the resolution rules can be asserted directly.
 */
async function loadNormalizeOverwriteConfig() {
  const require = createRequire(import.meta.url);
  const cliPackageJsonPath = require.resolve(
    '@graphql-codegen/cli/package.json'
  );
  const generateAndSavePath = path.join(
    path.dirname(cliPackageJsonPath),
    'esm',
    'generate-and-save.js'
  );
  const mod = await import(pathToFileURL(generateAndSavePath).href);
  return mod.normalizeOverwriteConfig as (
    config: { overwrite?: unknown },
    fileOutput: { filename: string; overwrite?: unknown }
  ) => { removeStaleFiles: boolean; updateExistingFiles: boolean };
}

describe('normalizeOverwriteConfig()', () => {
  it('uses the overwrite carried on the generated file', async () => {
    const normalizeOverwriteConfig = await loadNormalizeOverwriteConfig();

    expect(
      normalizeOverwriteConfig(
        { overwrite: true },
        {
          filename: `${baseOutputDir}/resolvers/Query/user.ts`,
          overwrite: serverPresetOverwrite,
        }
      )
    ).toEqual(serverPresetOverwrite);
  });

  it('falls back to the global overwrite when the file carries none', async () => {
    const normalizeOverwriteConfig = await loadNormalizeOverwriteConfig();

    expect(
      normalizeOverwriteConfig(
        { overwrite: { removeStaleFiles: false } },
        { filename: 'src/generated.ts' }
      )
    ).toEqual({ removeStaleFiles: false, updateExistingFiles: true });
  });

  it('expands the boolean shorthand', async () => {
    const normalizeOverwriteConfig = await loadNormalizeOverwriteConfig();

    expect(
      normalizeOverwriteConfig({}, { filename: 'a.ts', overwrite: false })
    ).toEqual({ removeStaleFiles: false, updateExistingFiles: false });

    expect(normalizeOverwriteConfig({}, { filename: 'a.ts' })).toEqual({
      removeStaleFiles: true,
      updateExistingFiles: true,
    });
  });
});
