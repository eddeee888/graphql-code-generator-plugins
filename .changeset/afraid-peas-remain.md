---
'@eddeee888/gcg-typescript-resolver-files': minor
---

Add resolverMainFileMode. `merged` or `modules` (Default: `merged`)

How to generate file/s that put resolvers map together:

- `merged`: one file
- `modules`: one file per module. This can be used with module-based libraries like [graphql-modules](https://the-guild.dev/graphql/modules)

Example codegen config:

```ts
// codegen.ts
import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  schema: '**/*.graphql',
  generates: {
    'src/schema': defineConfig({
      resolverMainFileMode: 'modules',
    }),
  },
};

export default config;
```

`resolverMainFileMode=modules` generates one `resolvers.generated.ts` file in each module:

```text
├── src/
│   ├── schema/
│   │   ├── base/
│   │   │   ├── schema.graphql
│   │   │   ├── resolvers.generated.ts # generated in each module by `resolverMainFileMode=modules`
│   │   ├── user/
│   │   │   ├── schema.graphql
│   │   │   ├── resolvers.generated.ts # generated in each module by `resolverMainFileMode=modules`
│   │   ├── book/
│   │   │   ├── schema.graphql
│   │   │   ├── resolvers.generated.ts # generated in each module by `resolverMainFileMode=modules`
```

If you are using `graphql-modules`, you can use the resolvers map like this:

```ts
// src/schema/user/index.ts
import { createModule } from 'graphql-modules';
import { resolvers } from './resolvers.generated.ts';

export const userModule = createModule({
  id: 'user-module',
  dirname: __dirname,
  typeDefs: [
    /* Your typeDefs*/
  ],
  resolvers,
});
```
