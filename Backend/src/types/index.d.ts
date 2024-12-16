import { Document } from "mongoose";

// LOGIN
export interface IUser extends Document {
  email: string;
  password: string;
  role: "user" | "admin";
  name: string;
  address: string;
  phone: number;
  isValidPassword(password: string): Promise<boolean>;
  [key: string]: any;
}

export interface RegisterUserInput {
  email: string;
  password: string;
  role: "user" | "admin";
  name: string;
  address: string;
  phone: string;
}

// TASK
export interface ITask extends Document {
  id: string;
  title: string;
  description: string;
  category: String;
  assignTo: String;
  priority: String;
  deadlineAt: String;
  createdAt?: String;
  updatedAt?: String;
  status: string;
}

type Mutation {
  addTask(input: TaskInput!): Task
}


export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: string;
}

export interface PageInfo {
  currentPage: number;
  totalPages: number;
  totalCount: number;
}

export interface TaskConnection {
  edges: Task[];
  pageInfo: PageInfo;
}

export type Role = {
  role: "user" | "admin";
};
