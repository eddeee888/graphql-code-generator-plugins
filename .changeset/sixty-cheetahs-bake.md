---
'@eddeee888/gcg-typescript-resolver-files': minor
---

Add typeDefsFileMode. `merged` or `mergedWhitelisted` or `modules` (Default: `merged`)

How to generate typeDefs file/s:

- `merged`: one file
- `mergedWhitelisted`: one file but only contains whitelisted modules. This is useful if your blacklisted modules handle their own type defs
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
      typeDefsFileMode: 'modules',
    }),
  },
};

export default config;
```

`typeDefsFileMode=modules` generates one `typeDefs.generated.ts` file in each module:

```text
├── src/
│   ├── schema/
│   │   ├── base/
│   │   │   ├── schema.graphql
│   │   │   ├── typeDefs.generated.ts # contains typeDefs of `src/schema/base/schema.graphql`
│   │   ├── user/
│   │   │   ├── schema.graphql
│   │   │   ├── typeDefs.generated.ts # contains typeDefs of `src/schema/user/schema.graphql`
│   │   ├── book/
│   │   │   ├── schema.graphql
│   │   │   ├── typeDefs.generated.ts # contains typeDefs of `src/schema/book/schema.graphql`
```

If you are using `graphql-modules`, you can use the resolvers map like this:

```ts
// src/schema/user/index.ts
import { createModule } from 'graphql-modules';
import { typeDefs } from './typeDefs.generated.ts';

export const userModule = createModule({
  id: 'user-module',
  dirname: __dirname,
  typeDefs: [typeDefs],
  resolvers: {
    /* Your resolver map */
  },
});
```
