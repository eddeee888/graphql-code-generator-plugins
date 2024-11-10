import gql from 'graphql-tag';

export const userTypeDefs = gql`
  type User {
    id: ID!
    role: UserRole!
    createdAt: DateTime!
  }

  enum UserRole {
    ADMIN
    USER
  }
`;
