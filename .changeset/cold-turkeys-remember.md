---
'@eddeee888/gcg-typescript-resolver-files': minor
---

Add resolverGeneration option

`disabled` or `recommended` or `full` (Default: `recommended`)

Decides which resolvers to generate:

- `disabled`: generates no resolvers. Use this if you want to use your own structures. Note: if custom scalars are detected and used, resolver main files are still generated.
- `recommended`: generates the minimal amount of resolvers. Use this if you want a managed experience.
  - no union/interface resolvers are generated because we rely on certain settings in `typescript-resolvers` that make these not required.
- `full`: generates all resolvers. Use this if you want all resolvers to be generated and use the ones you need.
