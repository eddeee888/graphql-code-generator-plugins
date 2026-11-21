---
'@eddeee888/gcg-typescript-resolver-files': patch
---

Fix Federation `@external` fields being picked in object type resolvers when `extend type` is used across multiple modules

Previously, every field of an object type was added to each module's `Pick<...>`, including `@external` fields that `typescript-resolvers` does not generate resolver types for. With `useIndexSignature: true`, this made the external fields required in the resolver object; without it, the `Pick` keys did not exist on the resolvers type. Both resulted in type errors.

Fields to pick are now filtered using the same `ApolloFederation` logic as `typescript-resolvers` when `typesPluginsConfig.federation` is enabled i.e. `@external` fields (or fields of an `@external` object type) are skipped, unless there is a `@provides` path to them.
