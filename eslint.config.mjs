import { defineConfig } from 'eslint/config';
import nx from '@nx/eslint-plugin';
import my from '@eddeee888/eslint-plugin';

export default defineConfig(
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  ...my.configs.typescript,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    ignores: [
      '**/dist',
      'eslint.config.mjs',
      'packages/typescript-resolver-files-e2e/src/**/*.generated.*',
      'packages/typescript-resolver-files-e2e/src/**/*.gen.*',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.json'],
    // Override or add rules here
    rules: {},
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  }
);
