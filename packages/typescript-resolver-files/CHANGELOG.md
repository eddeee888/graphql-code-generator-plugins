# @eddeee888/gcg-typescript-resolver-files

## 0.9.3

### Patch Changes

- 386bb30: Fix issue where variable statements without type node does not get type node added
- 6715a49: Prefer detected scalar file on filesystem over scalar modules when wiring up resolvers map
- 86babc6: Fix issue where GraphQLScalarType is imported all the time, regardless of whether it's used

## 0.9.2

### Patch Changes

- 538eb24: Fix issue where whitelisted/blacklisted module can incorrectly detect extended resolvers to wire up to resolvers.generated.ts
- 263604f: Fix externalResolvers config not working for enums

## 0.9.1

### Patch Changes

- e999093: Add hooks to defineConfig context

## 0.9.0

### Minor Changes

- 454d1df: Add resolverGeneration 'minimal' mode

  `minimal` is the equivalent of:

  ```json
  {
    "query": "*",
    "mutation": "*",
    "subscription": "*",
    "scalar": "*",
    "object": "",
    "union": "",
    "interface": ""
  }
  ```

- 454d1df: Implement file auto-wireup if detected at the right filesystem location

### Patch Changes

- c48e8c6: Update internals to avoid parsing schema twice

## 0.8.1

### Patch Changes

- 3213b73: Bump base codegen plugin to apply patches from upstream
- d6df63c: Force generate object types with mappers to avoid runtime errors
- Updated dependencies [3213b73]
  - @eddeee888/gcg-server-config@0.2.1

## 0.8.0

### Minor Changes

- 6bf957d: Extend `resolverGeneration` functionality

  Allow passing in an object that to control which files to be generated. By default (i.e. `resolverGeneration: 'recommended'`), it's equivalent to the following settings:

  ```ts
  defineConfig({
    resolverGeneration: {
      query: '*',
      mutation: '*',
      subscription: '*',
      scalar: '*',
      object: '*',
      union: '',
      interface: '',
    },
  });
  ```

  Each option can take a glob pattern to tell the preset which files of a given type to be generated based on its normalized file name.

  ***

  A normalized file name has this pattern:

  ```
  <Module name>.<Top-level type name>.<Field resolver>?
  ```

  Consider this schema:

  ```graphql
  # src/schema/pet/schema.graphql
  extend type Query {
    pets: [Pet!]!
  }

  type Cat {
    id: ID!
  }
  type Dog {
    id: ID!
  }
  union Pet = Cat | Dog

  # src/schema/user/schema.graphql
  extend type Mutation {
    createUser(id: ID!): CreateUserResult!
  }

  type User {
    id: ID!
  }

  type CreateUserOk {
    result: User!
  }
  type CreateUserError {
    error: String!
  }
  union CreateUserResult = CreateUserOk | CreateUserError
  ```

  Then, the generated files and normalised names are:

  - `src/schema/pet/resolvers/Query/pets.ts`, affected by `query` option, normalized name: `pet.Query.pets`
  - `src/schema/pet/resolvers/Cat.ts`, affected by `object` option, normalized name: `pet.Cat`
  - `src/schema/pet/resolvers/Dog.ts`, affected by `object` option, normalized name: `pet.Dog`
  - `src/schema/pet/resolvers/Pet.ts`, affected by `union` option, normalized name: `pet.Pet`
  - `src/schema/user/resolvers/Mutation/createUser.ts`, affected by `mutation` option, normalized name: `user.Mutation.createUser`
  - `src/schema/user/resolvers/User.ts`, affected by `object` option, normalized name: `user.User`
  - `src/schema/user/resolvers/CreateUserOk.ts`, affected by `object` option, normalized name: `user.CreateUserOk`
  - `src/schema/user/resolvers/CreateUserError.ts`, affected by `object` option, normalized name: `user.CreateUserError`
  - `src/schema/user/resolvers/CreateUserResult.ts`, affected by `union` option, normalized name: `user.CreateUserResult`

  Now, let's say we want to disable all union files, types ending with `Ok` or `Error`, the config would look like this:

  ```ts
  defineConfig({
    resolverGeneration: {
      query: '*',
      mutation: '*',
      subscription: '*',
      scalar: '*',
      object: ['!*.*Ok', '!*.*Error'], // Disables objects ending with `Ok` or `Error` in every module
      union: '', // Empty string disables all file generation of relevant type in every module
      interface: '*',
    },
  });
  ```

- 00a80bc: Bump ts-morph to v22 which requires TypeScript 5.4

### Patch Changes

- 6bf957d: Add colours to logs
- de5599b: Move union and interface config from server config to server preset

  This config is fairly opinionated and may not make sense being on server config. However, it is definitely the default mode of operation we want to use for server preset to avoid having extra files, simplifying the setup.

- Updated dependencies [de5599b]
  - @eddeee888/gcg-server-config@0.2.0

## 0.7.5

### Patch Changes

- 4ab8016: Use TypeScript typechecker to collect type properties

  Previously, we manually walked through the program to collect properties of types. This is problematic as there are lots of ways to declare mappers that we cannot manually handle. On top of this, type property properties can be handled natively correctly by TypeScript typechecker.

  Note: class declaration private properties are picked up by TypeScript typechecker, which could be problematic. We are keeping that case as-is.

## 0.7.4

### Patch Changes

- e909a17: fix path to output resolver files in main resolver files for nested schema files
- 067bd7e: Add params to generated resolvers
- 47c8fa6: Update package.json with missing deps
- 891f718: fix path to output resolver files so they are always generated near to schema.graphql
- b226761: Implement recursively pick interface extensions
- Updated dependencies [47c8fa6]
  - @eddeee888/gcg-server-config@0.1.1

## 0.7.3

### Patch Changes

- 9f3b82b: Federation support: Add \_\_resolveReference to picked fields when extending object types

## 0.7.2

### Patch Changes

- 8ed14fc: Fix issue where dashes were not handled correctly when using extended object pattern across multiple schemas
- 7567190: Declare tslib as a dependency

## 0.7.1

### Patch Changes

- 73d9936: Relax `presetConfig.typesPluginsConfig.namingConvention` enforcement. Warn if used.

  In v0.7.0, we've made `presetConfig.typesPluginsConfig.namingConvention` to throw if used. In this release, we've relaxed it because certain options may still work e.g. `upperCaseFirst `. If `namingConvention` is used, we warn instead.

  Currently, the preset naively uses the schema type spelling/casing as the generated type. Therefore, it's important to have `namingConvention` option as `keep`. In the future, we can revisit to make sure generated resolvers have the same `namingConvention` support as the generated type file.

## 0.7.0

### Minor Changes

- ab6a9e7: Support extending non-root object types

  For example, given this schema:

  ```graphql
  # user/schema.graphql
  type User {
    id: ID!
  }

  #  car/schema.graphql
  extend type User {
    cars: [Car!]!
  }

  # house/schema.graphql
  extend type User {
    housesOwned: [House!]!
    housesSold: [House!]!
  }
  ```

  It'd generate these files:

  ```ts
  // user/resolvers/User.ts
  export const User: Pick<UserResolvers, 'id'> = {
    // ...
  };

  // car/resolvers/User.ts
  export const User: Pick<UserResolvers, 'cars'> = {
    // ...
  };

  // house/resolvers/User.ts
  export const User: Pick<UserResolvers, 'housesOwned' | 'housesSold'> = {
    // ...
  };
  ```

  And the main resolver file:

  ```ts
  // resolvers.generated.ts
  import { User as user_User } from './user/resolvers/User';
  import { User as car_User } from './car/resolvers/User';
  import { User as house_User } from './house/resolvers/User';

  export const resolvers: Resolvers = {
    User: {
      ...user_User,
      ...car_User,
      ...house_User,
    },
  };
  ```

- d5d9577: Drop support for `typesPluginsConfig.namingConvention` - this is now always `keep`

  In the preset, we made the assumption that the types used in resolver files are in the same format as the schema. So we `keep` the naming convention.

  Some types in `types.generated.ts` are affected. However, they are not currently used in any of the resolver files. So, if consumers have leaned into the recommended default config and generated resolver files (which is the intention of the preset), then there should be no issue upgrading.

- 5497e8f: Add experimental support for [add](https://the-guild.dev/graphql/codegen/plugins/other/add) plugin.

  Consumers can use the preset's `add` option to do the equivalent of the `add` plugin to target the generated resolvers type file (default `types.generated.ts`).

  Example:

  ```ts
  // codegen.ts
  {
    generates: {
      'src/schema': defineConfig({
        add: {
          './types.generated.ts': { content: '/* eslint-disable */' },
        },
      })
    }
  }
  ```

### Patch Changes

- Updated dependencies [ccdc5e2]
  - @eddeee888/gcg-server-config@0.1.0

## 0.6.0

### Minor Changes

- d0e17ad: Add resolverGeneration option

  `disabled` or `recommended` or `all` (Default: `recommended`)

  Decides which resolvers to generate:

  - `disabled`: generates no resolvers. Use this if you want to use your own structures. Note: if custom scalars are detected and used, resolver main files are still generated.
  - `recommended`: generates the minimal amount of resolvers. Use this if you want a managed experience.
    - no union/interface resolvers are generated because we rely on certain settings in `typescript-resolvers` that make these not required.
  - `all`: generates all resolvers. Use this if you want all resolvers to be generated and use the ones you need.

- 1586d73: Add missing Interface file generation

### Patch Changes

- c3ee642: Fix emitLegacyCommonJSImports issues

  - Fix issue where warning always logged if `presetConfig.emitLegacyCommonJSImports` is used
  - Throw error when `presetConfig.typesPluginsConfig.emitLegacyCommonJSImports` is used
  - (Internal) Replace automatic file detection in `printImportLine` with 3 options: `file`, `module` and `preserve`:
    - This is to fix rare cases where absolute alias path is used in `externalResolvers` option e.g. `src/module/file` was missing `.js` because it was being detected as a module. `externalResolvers` is set by the user and also used internally for scalar types, so we can use `preserve` instead to keep the module value as-is.
    - Options:
      - `file`: import is a file. For ESM, .js extension is added. For CJS, no extension is added.
      - `module`: import is a module from `node_modules` or aliased e.g. `graphql-scalars` or `@org/your-module`. No extension is added.
      - `preserve`: preserve what the config declares. This is only used when taking user's config or preset-controlled config e.g. `externalExternals` because the import could be either file or module

- 191705f: Add schema option to defineConfig
- 49ba468: Added support for the case where the Type mapper is a class
- c968c2c: Fix: defineConfig's type no longer allows typesPluginsConfig.scalars or typesPluginsConfig.emitLegacyCommonJSImports
- 2205e3f: Update default custom GraphQLScalar template to guide users better
- Updated dependencies [5e58a08]
  - @eddeee888/gcg-server-config@0.0.1

## 0.5.0

### Minor Changes

- f7831c1: Use resolversNonOptionalTypename instead of nonOptionalTypename

  This makes using abstract types simpler because we do not return \_\_typename for all types, only for union members and interface implementing types.

- f7831c1: Add scalarsOverrides config option

  `Record<string, { resolver?: string; type?: string | { input: string; output: string } }>` (Default: `{}`)

  Overrides scalars' resolver implementation, type or both.

  Example:

  ```ts
  // codegen.ts
  {
    generates: {
      'src/schema': defineConfig({
        scalarsOverrides: {
          DateTime: {
            resolver: './localDateTimeResolver#Resolver',
          }
          Currency: {
            type: 'unknown'
          },
          BigInt: {
            resolver: '@other/scalars#BigIntResolver',
            type: 'bigint'
          }
        }
      })
    }
  }
  ```

  BREAKING CHANGE: `typesPluginsConfig.scalars` can no longer be used. Please use `scalarOverrides` instead.

- f7831c1: Use optionalResolveType=true because resolversNonOptionalTypename works
- f7831c1: Add scalarsModule config option

  `string` or `false` (Default: `graphql-scalars`)

  Where Scalar implementation and codegen types come from. Use `false` to implement your own Scalars.

  If using an module that is not `graphql-scalars`, the module must export resolver implementation and codegen type the same way `graphql-scalars` does e.g.

  ```ts
  {
    resolvers: {
      DateTime: DateTimeResolver,
    },
    DateTimeResolver: {
      // ... resolver implementation
      extensions: {
        codegenScalarType: 'Date | string',
      },
    }
  }
  ```

### Patch Changes

- f7831c1: Allows overriding native scalar types' type (Equivalent of typescript plugin's scalars option)
- f7831c1: Correctly implement ID Scalar's input/output type: input is string and output is string | number

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
