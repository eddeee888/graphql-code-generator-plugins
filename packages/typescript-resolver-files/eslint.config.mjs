import baseConfig from '../../eslint.config.mjs';

export default [
  // Generated benchmark workload output is not source; never lint it.
  { ignores: ['**/.workload/**'] },
  ...baseConfig,
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: [
            '{projectRoot}/benchmark/**/*.ts',
            '{projectRoot}/eslint.config.mjs',
            '{projectRoot}/vite.config.ts',
          ],
        },
      ],
    },
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
];
