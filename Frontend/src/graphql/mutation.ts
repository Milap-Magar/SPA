import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
  mutation Register(
    $email: String!
    $password: String!
    $name: String!
    $role: String!
    $address: String!
    $phone: String!
  ) {
    register(
      email: $email
      password: $password
      role: $role
      name: $name
      address: $address
      phone: $phone
    ) {
      id
      name
      email
      address
      phone
    }
  }
`;
