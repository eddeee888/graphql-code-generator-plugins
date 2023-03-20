import * as path from 'path';
import type { Types } from '@graphql-codegen/plugin-helpers';
import type { TypedPresetConfig } from './validatePresetConfig';
import { preset } from './preset';

// TODO: remove this once new @graphql-codegen/plugin-helpers is released
type ConfigWatchPattern = {
  watchPattern?: string | string[];
};

export const defineConfig = (
  presetConfig: TypedPresetConfig = {},
  context: { baseOutputDir: string } = { baseOutputDir: '' }
): Pick<Types.ConfiguredOutput, 'preset' | 'presetConfig'> &
  ConfigWatchPattern => {
  const { baseOutputDir } = context;

  const mappersFileExtension =
    presetConfig.mappersFileExtension || '.mappers.ts';

  const watchPattern: string | string[] = [];
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
  };
};
