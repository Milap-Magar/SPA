import { IUser } from "../../types/";
import jwt from "jsonwebtoken";
import User from "../../models/User";
import { registerUserSchema } from "../../validations/validations";
// import { verifyToken } from "../../middleware/verifyToken";

export const userResolvers = {
  Query: {
    user: async (_: any, __: any, { user }: { user: IUser | null }) => {
      if (!user) {
        throw new Error("Not authenticated");
      }
      return user;
    },
    userID: async (
      _: unknown,
      { id }: { id?: string | null },
      { currentUser }: { currentUser: IUser | null }
    ) => {
      if (!currentUser) {
        throw new Error("Not authenticated");
      }

      const userId = id || currentUser.id; 
      const user = await User.findById(userId);

      if (!user) {
        throw new Error("User not found");
      }

      return user;
    },
    // getUsersDetails: async (_: any, __: any, { token }: { token: string }) => {
    //   console.log("🚀 ~ getUsersDetails: ~ token:", token);

    //   const userData = verifyToken({ token });
    //   if (!userData) {
    //     throw new Error("Invalid or expired token");
    //   }
    //   // const user = await User.findById(userData.userId);
    //   // if (!user) {
    //   //   throw new Error("User not found");
    //   // }
    //   // return user;
    //   return userData;
    // },
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
      // console.log("🚀 ~ token:", token);
      return { id: user.id, token, user };
    },
  },
};
