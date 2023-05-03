---
'@eddeee888/gcg-typescript-resolver-files': minor
---

Use resolversNonOptionalTypename instead of nonOptionalTypename

This makes using abstract types simpler because we do not return \_\_typename for all types, only for union members and interface implementing types.
