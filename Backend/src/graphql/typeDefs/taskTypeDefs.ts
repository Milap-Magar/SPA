import { Task } from "./../../types/index.d";
import { gql } from "apollo-server-express";

export const taskTypeDefs = gql`
  type Task {
    id: ID!
    title: String!
    description: String!
    dueDate: String!
    status: String!
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

  type Mutation {
    createTask(
      title: String!
      description: String!
      dueDate: String!
      status: String!
    ): Task
    updateTask(
      id: ID!
      title: String!
      description: String!
      dueDate: String!
      status: String!
    ): Task
    deleteTask(id: ID!): Boolean
  }
`;
