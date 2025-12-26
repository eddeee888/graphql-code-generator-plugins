# GraphQL Code Generator Plugins

TEST

## Overview

List of [GraphQL Code Generator](https://www.the-guild.dev/graphql/codegen) plugins that complements the official plugins.

## Plugins

- [@eddeee888/gcg-typescript-resolver-files](./packages/typescript-resolver-files): Generates module-based resolvers based on types from [typescript](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript) and [typescript-resolvers](https://www.the-guild.dev/graphql/codegen/plugins/typescript/typescript-resolvers) plugins
- [@eddeee888/gcg-operation-location-migration](./packages/operation-location-migration/): Codemod to migrate various client approaches such as [@graphql-codegen/typescript-react-apollo](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-apollo) to [Client Preset](https://the-guild.dev/graphql/codegen/plugins/presets/preset-client) approach.

## Development

### Tools

- [Node](https://nodejs.org/)
- [nvm](https://github.com/nvm-sh/nvm): Node Version Manager
- [Yarn Classic](https://classic.yarnpkg.com/)
- [Nx](https://nx.dev/): Monorepo management tool
  - (Optional) Install Nx globally using `yarn global add nx`. This allows you to run `nx <command>`, otherwise you need to run `yarn nx <command>`
- [Changesets](https://github.com/changesets/changesets): Releasing NPM packages

### Get started

Use the right Node version:

```bash
nvm use
```

Install packages:

```bash
yarn install
```

### Contribution process

1. [Create issue outlining the problem](https://github.com/eddeee888/graphql-code-generator-plugins/issues/new/choose)
2. Fork the repo and make changes
3. Add unit tests and e2e tests
4. Document new config option in the package's README if required
5. Create changeset record for new package version with `yarn changeset` if required
6. Create a PR

Refer to README in each package for more info.
