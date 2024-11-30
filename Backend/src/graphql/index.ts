import { mergeTypeDefs } from "@graphql-tools/merge";

import { authTypeDefs } from "./typeDefs/authTypeDefs";
import { userTypeDefs } from "./typeDefs/userTypeDefs";

import { authResolvers } from "./resolvers/authResolvers";
import { userResolvers } from "./resolvers/userResolvers";

export const typeDefs = mergeTypeDefs([authTypeDefs, userTypeDefs]);

export const resolvers = [authResolvers, userResolvers];
