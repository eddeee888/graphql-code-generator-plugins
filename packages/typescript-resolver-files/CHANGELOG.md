# @eddeee888/gcg-typescript-resolver-files

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
