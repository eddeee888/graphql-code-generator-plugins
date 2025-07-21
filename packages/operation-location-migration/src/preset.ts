import {
  type Types,
  createNoopProfiler,
} from '@graphql-codegen/plugin-helpers';

export const preset: Types.OutputPreset = {
  buildGeneratesSection: async ({
    baseOutputDir,
    documents,
    presetConfig,
    profiler = createNoopProfiler(),
  }) => {
    console.log({ documents });

    return [];
  },
};
