# @eddeee888/gcg-server-config

This library has the recommended default options used by the server preset `@eddeee888/gcg-typescript-resolver-files`.

## Installation

```shell
yarn add -D @eddeee888/gcg-server-config
```

## Usage

`defineConfig` is typed with the assumption that [GraphQL Code Generator](https://the-guild.dev/graphql/codegen)'s [typescript](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript) and [typescript-resolvers](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-resolvers) plugins are used.

```ts
import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-server-config';

const config: CodegenConfig = {
  schema: '**/schema.graphql',
  generates: {
    'src/schema': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: defineConfig(),
    },
  },
};

export default config;
```
