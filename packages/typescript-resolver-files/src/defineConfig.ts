import * as path from 'path';
import type { Types } from '@graphql-codegen/plugin-helpers';
import type { TypedPresetConfig } from './validatePresetConfig';
import { preset } from './preset';

export const defineConfig = (
  presetConfig: TypedPresetConfig = {},
  context: {
    baseOutputDir?: string;
    schema?: Types.ConfiguredOutput['schema'];
  } = {}
): Pick<
  Types.ConfiguredOutput,
  'preset' | 'presetConfig' | 'watchPattern' | 'schema'
> => {
  const { schema, baseOutputDir = '' } = context;

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
  };
};
