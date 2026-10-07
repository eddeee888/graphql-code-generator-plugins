---
'@eddeee888/gcg-typescript-resolver-files': minor
---

Bump @graphql-tools/utils to ^12.0.3 and @graphql-tools/merge to ^9.2.6 so the preset's own dependencies no longer pull in versions affected by GHSA-7mx3-vvmw-hjmv. Copies brought in through `@graphql-codegen/*` and `graphql-config` clear once those packages release with the fix. `@graphql-tools/utils` v12 depends on `@whatwg-node/promise-helpers` v2, which requires Node >=22.15.0.
