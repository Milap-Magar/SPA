import { gql } from "apollo-server-express";

export const taskTypeDefs = gql`
  type Task {
    id: ID!
    title: String!
    description: String!
    category: String!
    assignTo: String!
    priority: String!
    deadlineAt: String!
    createAt: String!
    status: String!
  }
  type Query {
    tasks(
      page: Int
      limit: Int
      search: String
      sortBy: String
      sortOrder: String
    ): TaskConnection!
  }

  type PageInfo {
    currentPage: Int!
    totalPages: Int!
    totalCount: Int!
  }

  type TaskConnection {
    edges: [Task]!
    pageInfo: PageInfo!
  }
  
  type Query {
    tasks(
      page: Int
      limit: Int
      search: String
      sortBy: String
      sortOrder: String
    ): TaskConnection!
    task(id: ID!): Task
  }

  input TaskInput {
    title: String!
    description: String!
    category: String!
    assignTo: String!
    priority: String!
    deadlineAt: String!
    createAt: String!
    status: String!
  }

  type Mutation {
    addTask(input: TaskInput!): Task
  }
`;
