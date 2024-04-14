---
'@eddeee888/gcg-typescript-resolver-files': patch
---

Use TypeScript typechecker to collect type properties

Previously, we manually walked through the program to collect properties of types. This is problematic as there are lots of ways to declare mappers that we cannot manually handle. On top of this, type property properties can be handled natively correctly by TypeScript typechecker.

Note: class declaration private properties are picked up by TypeScript typechecker, which could be problematic. We are keeping that case as-is.
