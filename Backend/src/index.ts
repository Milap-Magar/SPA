import express from "express";
import { ApolloServer } from "apollo-server-express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { resolvers, typeDefs } from "./graphql";
import User from "./models/User";

mongoose
  .connect("mongodb://localhost:27017/graphql-login")
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
        const decodedToken = jwt.verify(token, "your_jwt_secret") as {
          userId: string;
        };
        const user = await User.findById(decodedToken.userId);
        return { user };
      } catch (error) {
        console.error(`🚀Token Verification Error: ${error}`);
      }
    }
    return {};
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
