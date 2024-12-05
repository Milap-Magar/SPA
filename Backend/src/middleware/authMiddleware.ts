import jwt from "jsonwebtoken";
import User from "../models/User";
import { IUser } from "../types";
import { Request } from "express";

interface DecodedToken {
  id: string;
  email: string;
  role: string;
}

export const authenticate = async (
  req: Request
): Promise<IUser | null | undefined> => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
    const user = await User.findById(decoded.id);
    return user || null;
  } catch (error) {
    console.error("Authentication Error", error);
    return null;
  }
};
