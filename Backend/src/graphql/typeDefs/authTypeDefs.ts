import { gql } from "apollo-server";

export const authTypeDefs = gql`
  type AuthPayLoad {
    token: String!
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): AuthPayLoad
    register(email: String!, password: String!, name: String!): User
  }
`;
