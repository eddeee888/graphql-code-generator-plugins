---
'@eddeee888/gcg-typescript-resolver-files': minor
---

Extend `resolverGeneration` functionality

Allow passing in an object that to control which files to be generated. By default (i.e. `resolverGeneration: 'recommended'`), it's equivalent to the following settings:

```ts
defineConfig({
  resolverGeneration: {
    query: '*',
    mutation: '*',
    subscription: '*',
    scalar: '*',
    object: '*',
    union: '',
    interface: '',
  },
});
```

Each option can take a glob pattern to tell the preset which files of a given type to be generated based on its normalized file name.

---

A normalized file name has this pattern:

```
<Module name>.<Top-level type name>.<Field resolver>?
```

Consider this schema:

```graphql
# src/schema/pet/schema.graphql
extend type Query {
  pets: [Pet!]!
}

type Cat {
  id: ID!
}
type Dog {
  id: ID!
}
union Pet = Cat | Dog

# src/schema/user/schema.graphql
extend type Mutation {
  createUser(id: ID!): CreateUserResult!
}

type User {
  id: ID!
}

type CreateUserOk {
  result: User!
}
type CreateUserError {
  error: String!
}
union CreateUserResult = CreateUserOk | CreateUserError
```

Then, the generated files and normalised names are:

- `src/schema/pet/resolvers/Query/pets.ts`, affected by `query` option, normalized name: `pet.Query.pets`
- `src/schema/pet/resolvers/Cat.ts`, affected by `object` option, normalized name: `pet.Cat`
- `src/schema/pet/resolvers/Dog.ts`, affected by `object` option, normalized name: `pet.Dog`
- `src/schema/pet/resolvers/Pet.ts`, affected by `union` option, normalized name: `pet.Pet`
- `src/schema/user/resolvers/Mutation/createUser.ts`, affected by `mutation` option, normalized name: `user.Mutation.createUser`
- `src/schema/user/resolvers/User.ts`, affected by `object` option, normalized name: `user.User`
- `src/schema/user/resolvers/CreateUserOk.ts`, affected by `object` option, normalized name: `user.CreateUserOk`
- `src/schema/user/resolvers/CreateUserError.ts`, affected by `object` option, normalized name: `user.CreateUserError`
- `src/schema/user/resolvers/CreateUserResult.ts`, affected by `union` option, normalized name: `user.CreateUserResult`

Now, let's say we want to disable all union files, types ending with `Ok` or `Error`, the config would look like this:

```ts
defineConfig({
  resolverGeneration: {
    query: '*',
    mutation: '*',
    subscription: '*',
    scalar: '*',
    object: ['!*.*Ok', '!*.*Error'], // Disables objects ending with `Ok` or `Error` in every module
    union: '', // Empty string disables all file generation of relevant type in every module
    interface: '*',
  },
});
```
