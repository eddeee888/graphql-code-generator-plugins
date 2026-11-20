---
'@eddeee888/gcg-typescript-resolver-files': minor
---

Remove the deprecated `emitLegacyCommonJSImports` preset option because @graphql-codegen/typescript 7 removed it. Use `importExtension` instead: `'.js'` for the old `emitLegacyCommonJSImports: false`, or leave it unset for the old `emitLegacyCommonJSImports: true`.
