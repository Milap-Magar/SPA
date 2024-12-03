import { IResolvers } from "@graphql-tools/utils";
import { tasks } from "../../../constants";
import { Task, TaskConnection } from "../../types";

type SortBy = keyof Task;

interface QueryTasksArgs {
  page: number;
  limit: number;
  search: string;
  sortBy: SortBy;
  sortOrder: string;
}

export const resolvers: IResolvers = {
  Query: {
    tasks: (
      _,
      {
        page = 1,
        limit = 10,
        search = "",
        sortBy = "dueDate",
        sortOrder = "ASC",
      }: QueryTasksArgs
    ): TaskConnection => {
      let filteredTasks = tasks.filter(
        (task) =>
          task.title.includes(search) || task.description.includes(search)
      );

      filteredTasks = filteredTasks.sort((a, b) => {
        if (sortOrder === "ASC") {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        } else {
          return a[sortBy] < b[sortBy] ? 1 : -1;
        }
      });

      const totalCount = filteredTasks.length;
      const totalPages = Math.ceil(totalCount / limit);
      const start = (page - 1) * limit;
      const end = start + limit;
      const paginatedTasks = filteredTasks.slice(start, end);

      return {
        edges: paginatedTasks,
        pageInfo: {
          currentPage: page,
          totalPages,
          totalCount,
        },
      };
    },
  },
};
    