import type { Types } from '@graphql-codegen/plugin-helpers';
import type { RawPresetConfig } from './validatePresetConfig';
import { preset } from './preset';

export const defineConfig = (
  presetConfig: RawPresetConfig = {}
): Pick<Types.ConfiguredOutput, 'preset' | 'presetConfig'> => {
  return {
    preset,
    presetConfig,
  };
};
