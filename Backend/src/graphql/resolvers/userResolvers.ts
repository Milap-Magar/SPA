import { IUser } from "../../types/";
import jwt from "jsonwebtoken";
import User from "../../models/User";
import { registerUserSchema } from "../../validations/validations";

export const userResolvers = {
  Query: {
    user: async (_: any, __: any, { user }: { user: IUser | null }) => {
      if (!user) {
        throw new Error("Not authenticated");
      }
      return user;
    },
  },
  Mutation: {
    register: async (
      _: any,
      {
        email,
        password,
        role,
        name,
        address,
        phone,
      }: {
        email: string;
        password: string;
        role: string;
        name: string;
        address: string;
        phone: string;
      }
    ) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("User already exists");
      }

      const { value, error } = registerUserSchema.validate({
        email,
        password,
        role,
        name,
        address,
        phone,
      });
      if (error) {
        throw new Error(error.details[0].message);
      }
      const newUser = new User(value);
      await newUser.save();
      return newUser;
    },

    login: async (
      _: any,
      { email, password }: { email: string; password: string }
    ) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }

      const isValid = await user.isValidPassword(password);
      if (!isValid) {
        throw new Error("Invalid password");
      }

      const token = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "1h",
        }
      );

      return { id: user.id, token, user };
    },
  },
};
