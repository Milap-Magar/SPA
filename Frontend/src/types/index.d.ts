import { Document } from "mongoose";

declare interface FormLogin {
  email: string;
  password: string;
  role?: "user" | "admin";
}

declare interface FormRegister {
  email: string;
  password: string;
  address: string;
  phone: number;
  position: string;
}

export interface IUser extends Document {
  email: string;
  password: string;
  role: "user" | "admin";
  isValidPassword(password: string): Promise<boolean>;
}

export declare interface userContextType {
  user: {
    id: string;
    name: string;
    email: string;
    address: string;
    phone: string;
  } | null;
  setUser: React.Dispatch<React.SetStateAction<userContextType["user"]>>;
  position: string;
}
declare interface User {
  id: string;
  name: string;
  email: string;
  address?: string;
  phone?: string;
  position?: string;
}

declare interface DataContextType {
  userData: User | null;
  loading: boolean;
  fetchUser: () => Promise<void>;
}
