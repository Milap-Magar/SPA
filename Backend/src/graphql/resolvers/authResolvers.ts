export const authResolvers = {
  Mutation: {
    login: async (
      _: any,
      { email, password }: { email: string; password: string }
    ) => {
      return {
        token: "sampleToken",
        user: { id: "1", name: "John Doe" },
      };
    },
    register: async (
      _: any,
      {
        email,
        password,
        name,
      }: { email: string; password: string; name: string }
    ) => {
      return {
        id: "2",
        name,
        email,
      };
    },
  },
};
