import { Document } from "mongoose";

// LOGIN
export interface IUser extends Document {
  email: string;
  password: string;
  role: "user" | "admin";
  address: string;
  phone: number;
  isValidPassword(password: string): Promise<boolean>;
}

export interface RegisterUserInput {
  email: string;
  password: string;
  role: "user" | "admin";
  address: string;
  phone: string;
}
// TASK
export interface ITask extends Document {
  title: string;
  description: string;
  dueDate: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
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
