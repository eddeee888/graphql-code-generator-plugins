# @eddeee888/gcg-server-config

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
