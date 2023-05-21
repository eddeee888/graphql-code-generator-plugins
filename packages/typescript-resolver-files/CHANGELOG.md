# @eddeee888/gcg-typescript-resolver-files

## 0.4.1

### Patch Changes

- af10b65: Add emitLegacyCommonJSImports config option to support esm-style imports in generated output
- 72c0dc1: Fix typeDefsFileMode=modules not working well with codegen hooks (e.g. afterAllFileWrite) for Windows

## 0.4.0

### Minor Changes

- 037afdc: Add resolverMainFileMode. `merged` or `modules` (Default: `merged`)

  How to generate file/s that put resolvers map together:

  - `merged`: one file
  - `modules`: one file per module. This can be used with module-based libraries like [graphql-modules](https://the-guild.dev/graphql/modules)

  Example codegen config:

  ```ts
  // codegen.ts
  import type { CodegenConfig } from '@graphql-codegen/cli';
  import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

  const config: CodegenConfig = {
    schema: '**/*.graphql',
    generates: {
      'src/schema': defineConfig({
        resolverMainFileMode: 'modules',
      }),
    },
  };

  export default config;
  ```

  `resolverMainFileMode=modules` generates one `resolvers.generated.ts` file in each module:

  ```text
  ├── src/
  │   ├── schema/
  │   │   ├── base/
  │   │   │   ├── schema.graphql
  │   │   │   ├── resolvers.generated.ts # contains resolvers of types in `src/schema/base/schema.graphql`
  │   │   ├── user/
  │   │   │   ├── schema.graphql
  │   │   │   ├── resolvers.generated.ts # contains resolvers of types in `src/schema/user/schema.graphql`
  │   │   ├── book/
  │   │   │   ├── schema.graphql
  │   │   │   ├── resolvers.generated.ts # contains resolvers of types in `src/schema/book/schema.graphql`
  ```

  If you are using `graphql-modules`, you can use the resolvers map like this:

  ```ts
  // src/schema/user/index.ts
  import { createModule } from 'graphql-modules';
  import { resolvers } from './resolvers.generated.ts';

  export const userModule = createModule({
    id: 'user-module',
    dirname: __dirname,
    typeDefs: [
      /* Your typeDefs*/
    ],
    resolvers,
  });
  ```

- df06e3b: Add typeDefsFileMode. `merged` or `mergedWhitelisted` or `modules` (Default: `merged`)

  How to generate typeDefs file/s:

  - `merged`: one file
  - `mergedWhitelisted`: one file but only contains whitelisted modules. This is useful if your blacklisted modules handle their own type defs
  - `modules`: one file per module. This can be used with module-based libraries like [graphql-modules](https://the-guild.dev/graphql/modules)

  Example codegen config:

  ```ts
  // codegen.ts
  import type { CodegenConfig } from '@graphql-codegen/cli';
  import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

  const config: CodegenConfig = {
    schema: '**/*.graphql',
    generates: {
      'src/schema': defineConfig({
        typeDefsFileMode: 'modules',
      }),
    },
  };

  export default config;
  ```

  `typeDefsFileMode=modules` generates one `typeDefs.generated.ts` file in each module:

  ```text
  ├── src/
  │   ├── schema/
  │   │   ├── base/
  │   │   │   ├── schema.graphql
  │   │   │   ├── typeDefs.generated.ts # contains typeDefs of `src/schema/base/schema.graphql`
  │   │   ├── user/
  │   │   │   ├── schema.graphql
  │   │   │   ├── typeDefs.generated.ts # contains typeDefs of `src/schema/user/schema.graphql`
  │   │   ├── book/
  │   │   │   ├── schema.graphql
  │   │   │   ├── typeDefs.generated.ts # contains typeDefs of `src/schema/book/schema.graphql`
  ```

  If you are using `graphql-modules`, you can use the resolvers map like this:

  ```ts
  // src/schema/user/index.ts
  import { createModule } from 'graphql-modules';
  import { typeDefs } from './typeDefs.generated.ts';

  export const userModule = createModule({
    id: 'user-module',
    dirname: __dirname,
    typeDefs: [typeDefs],
    resolvers: {
      /* Your resolver map */
    },
  });
  ```

- 086802e: Add `defineConfig`. This sets up `preset`, `presetConfig` and `watchPattern`.

  Example:

  ```ts
  import type { CodegenConfig } from '@graphql-codegen/cli';
  import { defineConfig } from '@eddeee888/typescript-resolver-files';

  const config: CodegenConfig = {
    schema: 'src/schema/**/*.graphql',
    generates: {
      'src/schema': defineConfig(),
    },
  };

  export default config;
  ```

### Patch Changes

- fe0ca5d: Bump ts-morph to v18
- d5aac16: Handle intersection typeNode usually seen in GQL Interface types e.g. `type TypeA = TypeB & { something: string } & { somethingelse: string }`
- 6324453: Fix Subscription default generation template
- b70ee7f: Use path.posix to fix Windows errors
- 5302e38: Add example for custom preset config in README

## 0.3.0

### Minor Changes

- 686cafd: Implement type comparison between mapper type vs schema type to generate resolvers

## 0.2.1

### Patch Changes

- 75fc48b: Bump @graphql-codegen/\* deps

## 0.2.0

### Minor Changes

- 0d3c9db: Generate typeDefs by default

## 0.1.2

### Patch Changes

- 0a07d09: Make graphql-scalars deps because it is used in implementation

## 0.1.1

### Patch Changes

- 120a06a: Make resolverRelativeTargetDir more reasonable for merged mode

## 0.1.0

### Minor Changes

- 80986d8: Update config setting names and defaults to prioritise 'modules' mode over 'merged'
- 6a918ed: Fix deps vs peerDeps in package.json
- a81f7f3: Implement auto mappers

### Patch Changes

- 9646937: Fix Scalars in blacklisted modules not being ignored correctly

## 0.0.7

### Patch Changes

- a53b315: Make generated RootObjectTypeFields NonNullable to make reexports easier

## 0.0.6

### Patch Changes

- eda27b7: Add blacklistedModules config

## 0.0.5

### Patch Changes

- a15db13: Merge internal `typescript` and `typescript-resolvers` plugins config to one `typesPluginsConfig` field

## 0.0.4

### Patch Changes

- bcfe20d: Use graphql-scalars types and config
- bcfe20d: Add support with overrides for typescript and typescript-resolvers plugins

## 0.0.3

### Patch Changes

- 5065768: Turn to preset to better integrate with codegen

## 0.0.2

### Patch Changes

- 0a99233: Implement generating logic for Scalar type
- b2fe4da: Implement config.externalResolvers

## 0.0.1

### Patch Changes

- 49ffe7a: Initial publish
