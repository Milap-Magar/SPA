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
  
export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!, $role: String!) {
    login(email: $email, password: $password, role: $role) {
      token
      user {
        id
        name
        email
        role
      }
    }
  }
`;
