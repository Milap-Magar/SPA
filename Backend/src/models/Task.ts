import mongoose, { Schema } from "mongoose";
import { ITask } from "../types";

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: String, required: true },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

const Task = mongoose.model<ITask>("Task", taskSchema);

export default Task;
