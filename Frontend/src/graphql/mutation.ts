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
    }
  }
`;

export const ADD_TASK = gql`
  mutation AddTask($input: TaskInput!) {
    addTask(input: $input) {
      id
      title
      description
      category
      assignTo
      priority
      deadlineAt
      status
    }
  }
`;
// export const ADD_TASK = gql`
// mutation addTask($id: String!, $taskTitle: String!, $taskDescription: String!, $dueDate: String! )
// {
//   createTask()
// }`;
