# @eddeee888/gcg-typescript-resolver-files

This [GraphQL Code Generator](https://www.the-guild.dev/graphql/codegen) plugin creates resolvers given GraphQL schema.

This relies on types generated from [@graphql-codegen/typescript](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript) and [@graphql-codegen/typescript-resolvers](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-resolvers) plugins.

```bash
yarn add -D @graphql-codegen/cli @eddeee888/gcg-typescript-resolver-files
yarn add graphql-scalars
```

## Features

- Generates opinionated folder/file structure with type-safety in mind to help finding query, mutation or object types easily
- Does _NOT_ overwrite existing resolver logic
- Detects missing / wrong resolver exports and adds them to resolver files
- Automatically sets up GraphQL Scalars with types and config from [graphql-scalars](https://github.com/Urigo/graphql-scalars) with ability to opt-out
- Automatically extracts object type mapper interfaces and types (marked with `Mapper` suffix) from accompanying `.mappers.ts` files in each module. For example, if the schema file is `/path/to/schema.graphql`, the mapper file is `/path/to/schema.mappers.ts`.

## Getting Started

### Setup

#### Files

```graphql
# src/schema/base/schema.graphql
type Query

# src/schema/user/schema.graphql
extend type Query {
  user(id: ID!): User
}

type User {
  id: ID!
  fullName: String!
}

type Address {
  id: ID!
  address: String!
}
```

````ts
// src/schema/user/schema.mappers.ts

// Exporting the following Mapper interfaces and types is the equivalent of this codegen config:
// ```yml
// mappers:
//   Address: './user/schema.mappers#AddressMapper'
//   User: './user/schema.mappers#UserMapper'
// ```

export { Address as AddressMapper } from 'address-package';

export interface UserMapper {
  id: string;
  firstName: string;
  lastName: string;
}
````

#### Codegen Config

```ts
// codegen.ts
import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  schema: '**/schema.graphql',
  generates: {
    'src/schema': defineConfig(),
  },
};

export default config;
```

OR

```yml
# codegen.yml
schema: '**/*.graphql'
generates:
  src/schema:
    preset: '@eddeee888/gcg-typescript-resolver-files'
    watchPattern: '**/*.mappers.ts'
```

### Result

Running codegen will generate the following files:

- `src/schema/user/resolvers/Query/user.ts`
- `src/schema/user/resolvers/User.ts`
- `src/schema/user/resolvers/Address.ts`
- `src/schema/resolvers.generated.ts`
- `src/schema/typeDefs.generated.ts`
- `src/schema/types.generated.ts`

## Config Options

### mode

`merged` or `modules` (Default: `modules`)

How files are collocated. `modules` detects containing dir of a schema file as "modules", then split resolvers into those modules. `merged` treats `baseOutputDir` as the one and only module and generates resolvers.

### moduleNamingMode

`last` or `first` or a number (Default: `last`)

Specifies how the plugin determines the module name for each schema file.

- **`last`**: The module name is derived from the **last** directory (within the schema directory) in the file's path.
- **`first`**: The module name is derived from the **first** directory (within the schema directory) in the file's path.
- **any number**: The module name is derived from the **nth zero-indexed** directory (within the schema directory) in the file's path. Supports negative numbers which select the **nth** directory from the back of the file's path.

For example:

#### last

- `src/schema/foo/bar/baz/User.graphql` => module name is `baz`

#### first

- `src/schema/foo/bar/baz/User.graphql` => module name is `foo`

#### 1

- `src/schema/foo/bar/baz/User.graphql` => module name is `bar`

#### -2

- `src/schema/foo/bar/baz/User.graphql` => module name is `bar`

### resolverTypesPath

`string` (Default: `./types.generated.ts`)

Relative path to type file generated by `typescript-resolvers` plugin.

### resolverRelativeTargetDir

`string` (Default: `resolvers`)

Relative path to target dir. For `config.mode=merged`, files will be generated into `<baseOutputDir>/<resolverRelativeTargetDir>`. For `config.mode=modules`, files will be generated into `<baseOutputDir>/**/<moduleName>/<resolverRelativeTargetDir>`.

### resolverMainFileMode

`merged` or `modules` (Default: `merged`)

How to generate file/s that put resolvers map together:

- `merged`: one file
- `modules`: one file per module

### resolverMainFile

`string` (Default: `resolvers.generated.ts`)

File that puts all generated resolvers together. Relative from `baseOutputDir`.

### resolverGeneration

`disabled` or `minimal` or `recommended` or `all` or object (Default: `recommended`)

Decides which resolvers to generate:

- `disabled`: generates no resolvers. Use this if you want to use your own structures. Note: if custom scalars are detected and used, resolver main files are still generated.
- `minimal`: generates root-level resolvers only.
- `recommended`: generates root-level and object resolvers. Use this if you want a managed experience.
  - no union/interface resolvers are generated because we rely on certain settings in `typescript-resolvers` that make these not required.
- `all`: generates all resolvers. Use this if you want all resolvers to be generated and use the ones you need.

Internally, each string option is turned into an object. This object uses glob pattern to tell which files to be generated based on the file's normalized name (\*). For example, `recommended` option is the equivalent of the following object:

```ts
{
  query: '*',
  mutation: '*',
  subscription: '*',
  scalar: '*',
  object: '*',
  union: '',
  interface: '',
  enum: '',
}
```

(\*) A normalized name has the following shape: `<Module name>.<Top-level type name>.<Field resolver>?`

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

Hint: To see why certain files are skipped, run codegen command with `DEBUG` turned on:

```
DEBUG="@eddeee888/gcg-typescript-resolver-files" yarn graphql-codegen
```

### typeDefsFileMode

`merged` or `mergedWhitelisted` or `modules` (Default: `merged`)

How to generate typeDefs file/s:

- `merged`: one file
- `mergedWhitelisted`: one file but only contains whitelisted modules
- `modules`: one file per module

If `config.mode=merged`, this config is always `merged`

### typeDefsFilePath

`string` or `false` (Default: `./typeDefs.generated.ts`)

Where to generate typeDefs files. If value is `false` or empty string, the file/s are not generated.

If `typeDefsFileMode=merged` or `typeDefsFileMode=mergedWhitelisted`, this path is relative from `baseOutputDir`.

If `typeDefsFileMode=modules`, this path is relative from each module directory.

### mergeSchema

`boolean`, `string` or `object` (Default:`./schema.generated.graphqls`)

Option to merge multiple schemas into one. Uses [schema-ast plugin](https://the-guild.dev/graphql/codegen/plugins/other/schema-ast) internally.

Unless `false` is used, the input is turned into the following object:

```ts
{
  path: string; // path to the generated file
  config: `(@graphql-codegen/schema-ast).SchemaASTConfig`; // Full config options can be found here: https://the-guild.dev/graphql/codegen/plugins/other/schema-ast
}
```

Note: Make sure your Codegen config's `schema` field does not include the generated schema file, otherwise unexpected errors may occur.

### add

`Record<string, (@graphql-codegen/add).AddPluginConfig>` (Default: `undefined`) (EXPERIMENTAL)

Allows using [add](https://the-guild.dev/graphql/codegen/plugins/other/add) plugin on a given file.

Note: Currently only supports `resolverTypesPath` file i.e. `types.generated.ts`

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

### whitelistedModules

`Array<string>` (Only works with `config.mode=modules`)

Whitelists modules to generate files and entries in main file. By default all modules are whitelisted. Useful for gradual migrations.

### blacklistedModules

`Array<string>` (Only works with `config.mode=modules`)

Blacklists modules to avoid generate files and entries in main file. Useful for gradual migrations.

### externalResolvers

`Record<string, string>`

Map of relative or absolute path (prefixed with `~`) to external or existing resolvers.

Examples:

- `DateTime: ~graphql-scalars#DateTimeResolver`
- `Query.me: '~@org/meResolver#default as meResolver'`
- `User: 'otherResolvers#User as UserResolver'`.

### typesPluginsConfig

`(@graphql-codegen/typescript).TypeScriptPluginConfig & (@graphql-codegen/typescript-resolvers).TypeScriptResolversPluginConfig`

Takes [typescript config](https://www.the-guild.dev/graphql/codegen/plugins/typescript/typescript) and [typescript-resolvers config](https://www.the-guild.dev/graphql/codegen/plugins/typescript/typescript-resolvers) to override the defaults.

Experimental options:

- `namingConvention`

### mappersRelativeTargetDir

`string` (Default: `./`)

By default, mappers must be siblings with the schema they represent. For example, if the schema file is `/path/to/schema.graphql`, the mapper file is `/path/to/schema.mappers.ts`. This extension allows mappers to reside in a different directory relative to the schema file using the pattern `<schemaPath>/<mappersRelativeTargetDir>/<schemaName><mappersFileExtension>`.

### mappersFileExtension

`string` (Default: `.mappers.ts`)

The files with this extension provides mappers interfaces and types for the schema files in the same module.

### mappersSuffix

`string` (Default: `Mapper`)

Exported interfaces and types with this suffix from `mappersFile` in each module are put into the mappers object of [@graphql-codegen/typescript-resolvers](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-resolvers).

### scalarsModule

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

### scalarsOverrides

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
          type: {
            input: 'bigint',
            output: 'number | string'
          }
        }
      }
    })
  }
}
```

### tsConfigFilePath

`string` (Default: `./tsconfig.json`)

Project's TypeScript config, relative from project root. This helps type analysis such as resolving custom module paths.

### fixObjectTypeResolvers

`smart` or `disabled` or object (Default: `smart`) (Experimental)

`smart` option does static analysis and add fields to ensure no runtime errors. The default `smart` option is expanded to an object like this to target supported types:

```ts
{
  object: 'smart',
  enum: 'smart'
}
```

- For objects types: statically compares object type's mapper types' field against schema types' fields, creating resolvers if required.
- For enum types: ensure all allowed values are present.

### emitLegacyCommonJSImports

`bool` (Default: `true`)

Determines whether imports emitted should use CommonJS syntax or ESM syntax (with `.js` file endings)

## Config Examples

#### 1. Custom Config

Custom preset config can be set using the `presetConfig` option:

```yml
# codegen.yml
schema: '**/*.graphql'
generates:
  src/schema:
    preset: '@eddeee888/gcg-typescript-resolver-files'
    presetConfig:
      mode: 'modules'
      resolverTypesPath: './types.gen.ts'
      typeDefsFilePath: false
      typesPluginsConfig: # Pass config you'd normally use for `typescript` and `typescript-resolvers` here
        nonOptionalTypename: false
        federation: true
```

#### 2. Using TypeScript Config File

If you use `codegen.ts`, you can use the exported `defineConfig` function to get better TypeScript support:

```ts
import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  schema: '**/schema.graphql',
  generates: {
    'src/schema': defineConfig({
      mode: 'modules',
      resolverTypesPath: './types.gen.ts',
      typeDefsFilePath: false,
      typesPluginsConfig: {
        // Pass config you'd normally use for `typescript` and `typescript-resolvers` here
        nonOptionalTypename: false,
        federation: true,
      },
    }),
  },
};
export default config;
```
