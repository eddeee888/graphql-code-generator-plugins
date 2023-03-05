import type { Types } from '@graphql-codegen/plugin-helpers';
import type { TypedPresetConfig } from './validatePresetConfig';
import { preset } from './preset';

export const defineConfig = (
  presetConfig: TypedPresetConfig = {}
): Pick<Types.ConfiguredOutput, 'preset' | 'presetConfig'> => {
  return {
    preset,
    presetConfig,
  };
};
