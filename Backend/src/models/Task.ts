import mongoose, { Schema } from "mongoose";
import { ITask } from "../types";

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    assignTo: { type: String, required: true },
    priority: { type: String, required: true },
    deadlineAt: { type: String, required: true },
    createdAt: { type: String },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

const Task = mongoose.model<ITask>("Task", taskSchema);

export default Task;
