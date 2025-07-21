import {
  type Types,
  createNoopProfiler,
} from '@graphql-codegen/plugin-helpers';

export const preset: Types.OutputPreset = {
  buildGeneratesSection: async ({
    schema,
    schemaAst,
    presetConfig,
    baseOutputDir,
    profiler = createNoopProfiler(),
  }) => {
    if (!schemaAst) {
      throw new Error('Missing schemaAst');
    }

    return [];
  },
};
