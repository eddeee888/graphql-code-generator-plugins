---
'@eddeee888/gcg-typescript-resolver-files': minor
---

Add scalarsOverrides config option

`Record<string, { resolver?: string; type?: string }>` (Default: `{}`)

Overrides scalars' resolver implementation, type or both.

Example:

```ts
// codegen.ts
{
  generates: {
    'src/schema': defineConfig({
      scalarsOverrides: {
        DateTime: {
          resolver: './localDateTimeResolver#Resolver',
        }
        Currency: {
          type: 'unknown'
        },
        BigInt: {
          resolver: '@other/scalars#BigIntResolver',
          type: 'bigint'
        }
      }
    })
  }
}
```

BREAKING CHANGE: `typesPluginsConfig.scalars` can no longer be used. Please use `scalarOverrides` instead.
