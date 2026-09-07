---
'@eddeee888/gcg-typescript-resolver-files': patch
---

Fix `fixObjectTypeResolvers` treating a mapper with an unresolvable type as an empty mapper, which injected a stub for every field of the schema type and could overwrite hand-maintained resolvers. This happened whenever a mapper aliased a type from an import that couldn't be resolved yet (e.g. a Prisma client not generated on a fresh install). The generator now detects the unresolved type, skips resolver generation for that mapper, and logs a warning naming it instead. Fixes #446.
