import mongoose from "mongoose";

const todosSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const ToDo = mongoose.model("todo", todosSchema);
