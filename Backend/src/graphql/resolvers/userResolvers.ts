export const userResolvers = {
  Query: {
    getUser: async (_: any, { id }: { id: string }) => {
      return { id, name: "John Doe", email: "JohnDoe@info.com" };
    },
  },
};
