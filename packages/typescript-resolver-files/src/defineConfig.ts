import * as path from 'path';
import type { Types } from '@graphql-codegen/plugin-helpers';
import type { TypedPresetConfig } from './validatePresetConfig/index.js';
import { preset } from './preset.js';

export const defineConfig = (
  presetConfig: TypedPresetConfig = {},
  context: {
    baseOutputDir?: string;
    schema?: Types.ConfiguredOutput['schema'];
    hooks?: Types.ConfiguredOutput['hooks'];
  } = {}
): Pick<
  Types.ConfiguredOutput,
  'preset' | 'presetConfig' | 'watchPattern' | 'schema' | 'hooks' | 'overwrite'
> => {
  const { schema, baseOutputDir = '', hooks } = context;

  const mappersFileExtension =
    presetConfig.mappersFileExtension || '.mappers.ts';

  const watchPattern: string[] = [];
  const mapperWatchPattern = path.posix.join(
    baseOutputDir,
    '**',
    `*${mappersFileExtension}`
  );
  watchPattern.push(mapperWatchPattern);

  return {
    preset,
    presetConfig,
    watchPattern,
    schema,
    hooks,
    overwrite: {
      // Server Preset needs to update existing resolver files
      updateExistingFiles: true,
      // When watching, it's common to avoid sending all files to Codegen to write to fs.
      // When that happens, previously tracked files are marked as stale and gets removed wrongly.
      // Therefore, we don't remove stale files.
      removeStaleFiles: false,
    },
  };
};
