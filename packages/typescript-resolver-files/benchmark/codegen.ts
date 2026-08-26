import * as path from 'path';
import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '../src/index.js';

const workloadDir = path.join(import.meta.dirname, '.workload');
const modulesDir = path.join(workloadDir, 'modules');

// The preset resolves `tsConfigFilePath` as `path.join(process.cwd(), value)`,
// so it must be given relative to the cwd (repo root, when run via the runner).
const tsConfigFilePath = path.relative(
  process.cwd(),
  path.join(workloadDir, 'tsconfig.json')
);

const config: CodegenConfig = {
  schema: [path.join(modulesDir, '**/*.graphqls')],
  generates: {
    [modulesDir]: defineConfig({
      tsConfigFilePath,
    }),
  },
};

export default config;
