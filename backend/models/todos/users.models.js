import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    todos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "todo",
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("user", userSchema);
