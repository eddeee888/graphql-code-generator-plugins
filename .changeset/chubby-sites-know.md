---
'@eddeee888/gcg-typescript-resolver-files': minor
---

Add LRU cache for resolver types vs mappers type check

Resolver types vs mappers check is the most expensive check in this plugin. We need this to determine which resolvers need to be added to avoid runtime errors.

Previously in watch mode, we run this expensive check every run, even if the schema or mappers don't change. Adding a LRU cache helps said scenario by re-using a previously parsed data.

This ensures the codemod scenarios, where schema or mappers don't change, run as efficiently as possible:

- ensuring resolver exports exist
- ensuring resolvers are injected correctly to avoid runtime issues
- etc.
