import type { Types } from '@graphql-codegen/plugin-helpers';
import { preset } from './preset';

export const defineConfig = (
  presetConfig: Record<string, unknown>,
  context: {
    schema?: Types.ConfiguredOutput['schema'];
    documents?: Types.ConfiguredOutput['documents'];
  } = {}
): Pick<Types.ConfiguredOutput, 'preset' | 'schema' | 'documents'> => {
  const { schema, documents } = context;

  return {
    schema,
    documents,
    preset,
  };
};
