import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
  
}, { timeStamp: true });

export const SubTodo = mongoose.model("subTodo", subTodoSchema);
