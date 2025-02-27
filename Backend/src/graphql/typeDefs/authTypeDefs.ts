import { gql } from "apollo-server";

export const authTypeDefs = gql`
  type AuthPayload {
    token: String!
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): AuthPayload
    register(email: String!, password: String!, name: String!): User
  }
`;
