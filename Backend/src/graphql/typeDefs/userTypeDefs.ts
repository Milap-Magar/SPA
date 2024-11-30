import { gql } from "apollo-server";

export const userTypeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query{
    getUser(id: ID!): User
  }
`;
