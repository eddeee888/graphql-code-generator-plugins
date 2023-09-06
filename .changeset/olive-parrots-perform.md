---
'@eddeee888/gcg-typescript-resolver-files': minor
---

Drop support for `typesPluginsConfig.namingConvention` - this is now always `keep`

In the preset, we made the assumption that the types used in resolver files are in the same format as the schema. So we `keep` the naming convention.

Some types in `types.generated.ts` are affected. However, they are not currently used in any of the resolver files. So, if consumers have leaned into the recommended default config and generated resolver files (which is the intention of the preset), then there should be no issue upgrading.
