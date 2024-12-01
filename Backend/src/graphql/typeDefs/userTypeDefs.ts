import { gql } from "apollo-server";

export const userTypeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }
  type AuthPayload {
    token: String!
    user: User1!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload
  }
`;
