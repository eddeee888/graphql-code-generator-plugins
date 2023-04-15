---
'@eddeee888/gcg-typescript-resolver-files': minor
---

Add scalarsModule config option

`string` or `false` (Default: `graphql-scalars`)

Where Scalar implementation and codegen types come from. Use `false` to implement your own Scalars.

If using an module that is not `graphql-scalars`, the module must export resolver implementation and codegen type the same way `graphql-scalars` does e.g.

```ts
{
  resolvers: {
    DateTime: DateTimeResolver,
  },
  DateTimeResolver: {
    // ... resolver implementation
    extensions: {
      codegenScalarType: 'Date | string',
    },
  }
}
```
