import { ApolloServer } from "apollo-server";
import { resolvers, typeDefs } from "./graphql";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server listening ${url}`);
});
