import Task from "../../models/Task";

export const taskResolvers = {
  Query: {
    tasks: async (
      _: any,
      {
        page = 1,
        limit = 10,
        search = "",
        sortBy = "createAt",
        sortOrder = "desc",
      }: {
        page?: number;
        limit?: number;
        search?: string;
        sortBy?: string;
        sortOrder?: "asc" | "desc";
      }
    ) => {
      try {
        const filter = search
          ? {
              $or: [
                { title: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },
              ],
            }
          : {};

        const totalCount = await Task.countDocuments(filter);
        const totalPages = Math.ceil(totalCount / limit);
        const tasks = await Task.find(filter)
          .sort({ [sortBy]: sortOrder === "asc" ? 1 : -1 })
          .skip((page - 1) * limit)
          .limit(limit);

        return {
          edges: tasks,
          pageInfo: {
            currentPage: page,
            totalPages,
            totalCount,
          },
        };
      } catch (error: any) {
        throw new Error(`Error fetching tasks: ${error.message}`);
      }
    },
  },

  Mutation: {
    addTask: async (_: any, { input }: { input: typeof Task }) => {
      try {
        const newTask = new Task(input);
        return await newTask.save();
      } catch (error: any) {
        throw new Error(`Error creating task: ${error.message}`);
      }
    },
  },
};
