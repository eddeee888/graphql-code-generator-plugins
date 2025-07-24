# @eddeee888/gcg-operation-location-migration

This [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) preset is a tool to migrate various operation and codegen style to the recommended Client Preset approach.

For example:

- From index-style to document node co-location
- From near-operation-file to document node co-location

## Installation

```sh
yarn add -D @eddeee888/gcg-operation-location-migration
```

## Usage

This preset is a migration tool so you only need to run it once with codegen command. It may not catch all edge cases, so it is recommended to review the code changes to ensure nothing breaks.

The general workflow has a few main steps:

1. Add the migration preset to your Codegen config
2. Comment out other Codegen generates config
3. Run codegen
4. Remove old documents
5. Add [Client Preset](https://the-guild.dev/graphql/codegen/plugins/presets/preset-client) config

### From index-style to document node co-location

```ts
import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-operation-location-migration';

const config: CodegenConfig = {
  schema: 'src/**/*.graphqls',
  documents: 'src/**/*.graphql',
  generates: {
    /*
     * Example of index-style generation where all types and hooks go to one file.
     * Once migrated, you can remove this completely
     */
    // 'src/generated/types-and-hooks.ts': {
    //  plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    // },

    'src/': defineConfig({
      tsConfigFilePath: 'path-to-your/tsconfig.json',
      gqlTag: {
        name: 'graphql',
        importFrom: './gql',
        importType: 'relative',
      },
      hooksImportFrom: '@apollo/client/react', // Use @apollo/client for v3
    }),
  },
};

export default config;
```

### From near-operation-file to document node co-location

```ts
import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-operation-location-migration';

const config: CodegenConfig = {
  schema: 'src/**/*.graphqls',
  documents: 'src/**/*.graphql',
  generates: {
    /*
     * Example of near-operation-file generation where hooks are generated next to the operation file.
     * Once migrated, you can remove this completely
     */
    // 'src/graphql/types.generated.ts': {
    //   plugins: ['typescript'],
    // },
    // './src/': {
    //   preset: 'near-operation-file',
    //   presetConfig: {
    //     baseTypesPath: './graphql/types.generated.ts',
    //     extension: '.generated.ts',
    //   },
    //   plugins: ['typescript-operations', 'typescript-react-apollo'],
    // },

    'src/': defineConfig({
      tsConfigFilePath: 'path-to-your/tsconfig.json',
      gqlTag: {
        name: 'graphql',
        importFrom: './gql',
        importType: 'relative',
      },
      hooksImportFrom: '@apollo/client/react', // Use @apollo/client for v3
    }),
  },
};

export default config;
```

### Switching to Client Preset

Once done, you can easily switch to Client Preset as everything should be in the right place:

```ts
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'src/**/*.graphqls',
  documents: 'src/**/*.tsx', // 👈 Your documents should be in your components, so this is updated to target them.
  generates: {
    'src/gql/': {
      preset: 'client',
    },
  },
};

export default config;
```
