---
'@eddeee888/gcg-typescript-resolver-files': minor
---

Add `defineConfig`. This sets up `preset`, `presetConfig` and `watchPattern`.

Example:

```ts
import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/typescript-resolver-files';

const config: CodegenConfig = {
  schema: 'src/schema/**/*.graphql',
  generates: {
    'src/schema': defineConfig(),
  },
};

export default config;
```
