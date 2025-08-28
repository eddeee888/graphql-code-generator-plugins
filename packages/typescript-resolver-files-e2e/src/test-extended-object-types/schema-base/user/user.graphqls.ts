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

  union UserPayload = UserResult | PayloadError

  extend type Topic {
    extendedTopicFieldInDifferentFileAndDifferentModule2: User!
    extendedTopicFieldInDifferentFileAndDifferentModule3: User!
  }

  extend type Cat {
    owner: User
  }

  extend type Fantasy {
    likedBy: [User!]!
  }
`;
