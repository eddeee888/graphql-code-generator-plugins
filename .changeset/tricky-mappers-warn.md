---
'@eddeee888/gcg-typescript-resolver-files': patch
---

Fix `fixObjectTypeResolvers` treating an unresolvable mapper type as an empty mapper and injecting a stub for every field

When a mapper aliases a type whose import cannot be resolved (a TypeScript _error type_ — e.g. a generated client that has not been generated yet, or a module that is not installed on a fresh checkout), `fixObjectTypeResolvers` (both `smart` and `fast`) previously treated the mapper as having zero fields and injected a resolver stub for every field of the schema type, silently overwriting hand-maintained resolver files with broken `Promise<void>` stubs.

The generator now detects the unresolved type, skips stub generation for that mapper (leaving existing resolvers untouched), and emits a warning naming the mapper so the underlying unresolved import surfaces instead. Genuinely empty mappers (e.g. `type FooMapper = {}`) still generate stubs as before.
