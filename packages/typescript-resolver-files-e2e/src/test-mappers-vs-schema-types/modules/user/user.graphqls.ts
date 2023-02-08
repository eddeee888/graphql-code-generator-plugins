import gql from 'graphql-tag';

export const userTypeDefs = gql`
  extend type Query {
    me: UserPayload!
    userByAccountName(accountName: String!): UserPayload!
  }

  type User {
    id: ID!
    fullName: String!
    accountGitHub: String
    accountGoogle: String
    role: UserRole!
    createdAt: DateTime!
  }

  type UserResult {
    result: User
  }

  enum UserRole {
    ADMIN
    USER
  }

  union UserPayload = UserResult | Error
`;
