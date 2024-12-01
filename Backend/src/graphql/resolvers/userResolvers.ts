const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./models/user");

interface Args {
  email: string;
  password: string;
}

interface Context {
  User: typeof User;
}

export const userResolvers = {
  Query: {
    me: async (_: unknown, args: Args, context: Context) => {
      const { email, password } = args;

      // Validate email and password input
      if (!email || !password) {
        throw new Error("Email and password are required");
      }

      // Find user by email
      const user = await context.User.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }

      // Validate password
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        throw new Error("Invalid password");
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, "your_jwt_secret", {
        expiresIn: "1h",
      });

      // Return the token and user information
      return {
        token,
        user,
      };
    },
  },
};
