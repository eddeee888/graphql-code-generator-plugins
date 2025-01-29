# @eddeee888/gcg-server-config

## 0.2.3

### Patch Changes

- 19e1f03: Fix \_\_resolveReference being required all the time

## 0.2.2

### Patch Changes

- 906d454: Bump @graphql-codegen/typescript-resolvers to v4.2.1

## 0.2.1

### Patch Changes

- 3213b73: Bump base codegen plugin to apply patches from upstream

## 0.2.0

### Minor Changes

- de5599b: Move union and interface config from server config to server preset

  This config is fairly opinionated and may not make sense being on server config. However, it is definitely the default mode of operation we want to use for server preset to avoid having extra files, simplifying the setup.

## 0.1.1

### Patch Changes

- 47c8fa6: Update package.json with missing deps

## 0.1.0

### Minor Changes

- ccdc5e2: Add recommended default `maybeValue` option: `T | null | undefined`

## 0.0.1

### Patch Changes

- 5e58a08: Add recommended config for GraphQL servers
