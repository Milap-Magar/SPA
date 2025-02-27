import { gql } from "apollo-server-express";

export const userTypeDefs = gql`
  type User {
    id: ID!
    email: String!
    role: String!
    name: String!
    address: String!
    phone: String!
  }

  type AuthPayload {
    id: ID!
    token: String!
    user: User!
  }

  type Query {
    user: User
    userID(id: ID): User
    # getUsersDetails(id: ID!): User
  }

  type Mutation {
    register(
      email: String!
      password: String!
      name: String!
      role: String!
      address: String!
      phone: String!
    ): User
    login(email: String!, password: String!, role: String!): AuthPayload
  }
`;
