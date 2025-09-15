import gql from 'graphql-tag';

export const userTypeDefs = gql`
  extend type Query {
  # Multi-word type: UserProfile -> user-profile.ts
    userProfile(id: ID!): UserProfile!
  # Single-word type: User -> user.ts
    user(id: ID!): User!
  }

  type User {
    id: ID!
  }

  type UserProfile {
    id: ID!
  }
`;
