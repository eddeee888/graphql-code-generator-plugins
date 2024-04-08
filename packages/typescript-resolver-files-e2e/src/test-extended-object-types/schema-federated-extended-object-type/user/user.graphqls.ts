import gql from 'graphql-tag';

export const userTypeDefs = gql`
  extend type Query {
    me: UserPayload!
    userByAccountName(accountName: String!): UserPayload!
  }

  type User {
    id: ID!
    name: String
    accountName: String!
    accountWebsite: String
    accountTwitter: String
    accountGitHub: String
    accountLinkedIn: String
    avatar: String
  }

  extend type ForeignType {
    users: [User!]!
  }

  type UserResult {
    result: User
  }

  union UserPayload = UserResult | PayloadError
`;
