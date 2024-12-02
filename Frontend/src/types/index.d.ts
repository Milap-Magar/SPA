import { Document } from "mongoose";

declare interface FormLogin {
  email: string;
  password: string;
}

declare interface FormRegister {
  email: string;
  password: string;
  address: string;
  phone: number;
}

export interface IUser extends Document {
  email: string;
  password: string;
  role: "user" | "admin";
  isValidPassword(password: string): Promise<boolean>;
}
