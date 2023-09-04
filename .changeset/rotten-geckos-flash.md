---
'@eddeee888/gcg-typescript-resolver-files': minor
---

Add experimental support for [add](https://the-guild.dev/graphql/codegen/plugins/other/add) plugin

Consumers can now use [add](https://the-guild.dev/graphql/codegen/plugins/other/add) plugin on the generated resolvers type (default `types.generated.ts`):

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
