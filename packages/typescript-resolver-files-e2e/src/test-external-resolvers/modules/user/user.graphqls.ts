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

  type UserResult {
    result: User
  }

  union UserPayload = UserResult | StandardError

  scalar RelativeDefault
  scalar RelativeNamedImport
  scalar RelativeNamedImportWithAlias
`;
