import type { Types } from '@graphql-codegen/plugin-helpers';
import type { TypedPresetConfig } from './config';
import { preset } from './preset';

export const defineConfig = (
  presetConfig: TypedPresetConfig,
  context: {
    schema?: Types.ConfiguredOutput['schema'];
    documents?: Types.ConfiguredOutput['documents'];
  } = {}
): Pick<
  Types.ConfiguredOutput,
  'schema' | 'documents' | 'preset' | 'presetConfig'
> => {
  const { schema, documents } = context;

  return {
    schema,
    documents,
    preset,
    presetConfig,
  };
};
