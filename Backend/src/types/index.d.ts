import { Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  role: "user" | "admin";
  address: string;
  phone: number;
  isValidPassword(password: string): Promise<boolean>;
}
