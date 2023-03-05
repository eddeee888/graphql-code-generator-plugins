import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '../../../../dist/packages/typescript-resolver-files/src/index';
const config: CodegenConfig = {
  schema: '**/schema.graphql',
  generates: {
    'src/schema': defineConfig(),
  },
};
export default config;
