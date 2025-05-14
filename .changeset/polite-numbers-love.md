---
'@eddeee888/gcg-typescript-resolver-files': patch
---

Avoid low-level TypeScript typechecker usage unncessarily, which breaks when running static analysis

Originally, `getType` function was called during static analysis to get low-level `Type` for each type property declarations. These types can be used in typechecker's `isAssignableTo` function, which would have a significant perf boost (if done right). However, there needs to be a significant change to use `.isAssignableTo`, so `getType` was left there so we can continue the work later.

However, declarations of a node could be `undefined` if the type is wrapped in generics that synthesies properties(?). This causes the runtime error. [Relevant convo](https://github.com/microsoft/TypeScript/issues/61697)

For now, we can just remove the `getType` call, until we know how to handle these typing issues.
