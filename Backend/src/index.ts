import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { resolvers, typeDefs } from "./graphql";
import { userSchema } from "./Model/User";

mongoose
  .connect("mongodb://localhost:27017/graphql-login", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("🚀 MongoDB connected"));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization || "";
    if (token) {
      try {
        const { userId } = jwt.verify(token, "your_jwt_secret");
        const user = await userSchema.findById(userId);
        return { user };
      } catch (error) {
        console.log(`🚀Token Verification Error: ${error}`);
      }
    }
    return {};
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server listening ${url} 🚀`);
});
