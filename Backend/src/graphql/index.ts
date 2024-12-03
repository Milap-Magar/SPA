import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

import { authTypeDefs } from "./typeDefs/authTypeDefs";
import { userTypeDefs } from "./typeDefs/userTypeDefs";
import { taskResolvers } from "./resolvers/taskResolver";

import { authResolvers } from "./resolvers/authResolvers";
import { userResolvers } from "./resolvers/userResolvers";
import { taskTypeDefs } from "./typeDefs/taskTypeDefs";

export const typeDefs = mergeTypeDefs([
  authTypeDefs,
  userTypeDefs,
  taskTypeDefs,
]);

export const resolvers = mergeResolvers([
  authResolvers,
  userResolvers,
  taskResolvers,
]);
