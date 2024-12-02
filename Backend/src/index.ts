import express from "express";
import { ApolloServer } from "apollo-server-express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { resolvers, typeDefs } from "./graphql";
import User from "./models/User";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("🚀 MongoDB connected"))
  .catch((error) => console.error(`❌ MongoDB connection error: ${error}`));

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization || "";
    if (token) {
      try {
        const decodedToken = jwt.verify(
          token,
          process.env.JWT_SECRET as string
        ) as {
          userId: string;
        };
        const user = await User.findById(decodedToken.userId);
        return { user };
      } catch (error) {
        console.error(`🚀 Token Verification Error: ${error}`);
        return { error: "Unauthorized Token Access" };
      }
    }
    return { error: "No token provided" };
  },
});

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
  });
};

startServer().catch((error) => {
  console.error(`❌ Server Error: ${error}`);
});
