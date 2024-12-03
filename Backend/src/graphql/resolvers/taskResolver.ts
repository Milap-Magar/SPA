import Task from "../../models/Task";

export const taskResolvers = {
  Query: {
    tasks: async () => {
      try {
        return await Task.find();
      } catch (error) {
        throw new Error("Error fetching tasks");
      }
    },
    task: async (_: any, { id }: { id: string }) => {
      try {
        return await Task.findById(id);
      } catch (error) {
        throw new Error("Error fetching task");
      }
    },
  },

  Mutation: {
    createTask: async (
      _: any,
      {
        title,
        description,
        dueDate,
        status,
      }: { title: string; description: string; dueDate: string; status: string }
    ) => {
      try {
        const newTask = new Task({
          title,
          description,
          dueDate,
          status,
        });
        return await newTask.save();
      } catch (error) {
        throw new Error("Error in creating Task");
      }
    },
    updateTask: async (
      _: any,
      {
        id,
        title,
        description,
        dueDate,
        status,
      }: {
        id: string;
        title?: string;
        description: string;
        dueDate: string;
        status: string;
      }
    ) => {
      try {
        const task = await Task.findById(id);
        if (!task) {
          throw new Error("404: Task NOT FOUND ");
        }
        task.title = title || task.title;
        task.description = description || task.description;
        task.dueDate = dueDate || task.dueDate;
        task.status = status || task.status;

        return await task.save();
      } catch (error) {
        throw new Error("Error Updating Task");
      }
    },
  },
};
