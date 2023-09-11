---
'@eddeee888/gcg-typescript-resolver-files': minor
---

Support extending non-root object types

For example, given this schema:

```graphql
# user/schema.graphql
type User {
  id: ID!
}

#  car/schema.graphql
extend type User {
  cars: [Car!]!
}

# house/schema.graphql
extend type User {
  housesOwned: [House!]!
  housesSold: [House!]!
}
```

It'd generate these files:

```ts
// user/resolvers/User.ts
export const User: Pick<UserResolvers, 'id'> = {
  // ...
};

// car/resolvers/User.ts
export const User: Pick<UserResolvers, 'cars'> = {
  // ...
};

// house/resolvers/User.ts
export const User: Pick<UserResolvers, 'housesOwned' | 'housesSold'> = {
  // ...
};
```

And the main resolver file:

```ts
// resolvers.generated.ts
import { User as user_User } from './user/resolvers/User';
import { User as car_User } from './car/resolvers/User';
import { User as house_User } from './house/resolvers/User';

export const resolvers: Resolvers = {
  User: {
    ...user_User,
    ...car_User,
    ...house_User,
  },
};
```
