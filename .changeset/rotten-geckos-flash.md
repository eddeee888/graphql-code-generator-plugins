---
'@eddeee888/gcg-typescript-resolver-files': minor
---

Add experimental support for [add](https://the-guild.dev/graphql/codegen/plugins/other/add) plugin.

Consumers can use the preset's `add` option to do the equivalent of the `add` plugin to target the generated resolvers type file (default `types.generated.ts`).

Example:

```ts
// codegen.ts
{
  generates: {
    'src/schema': defineConfig({
      add: {
        './types.generated.ts': { content: '/* eslint-disable */' },
      },
    })
  }
}
```
