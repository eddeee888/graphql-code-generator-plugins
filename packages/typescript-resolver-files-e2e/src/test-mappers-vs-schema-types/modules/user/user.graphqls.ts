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
    createdAt: DateTime!
  }

  type UserResult {
    result: User
  }

  union UserPayload = UserResult | Error
`;
