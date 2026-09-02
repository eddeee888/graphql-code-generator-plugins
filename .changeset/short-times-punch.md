---
'@eddeee888/gcg-typescript-resolver-files': patch
---

Use contentComparison=disk on generated resolver files because these are often have edits that bypasses cache, leading to unexpected behaviours. Related PR: https://github.com/dotansimha/graphql-code-generator/pull/10928
