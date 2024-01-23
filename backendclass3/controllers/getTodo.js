// Import the model
const Todo = require("../models/Todo");

// Define route
exports.getTodo = async (req, res) => {
  try {
    //fetch all todo items from database
    const todos = await Todo.find({});

    //response
    res.status(200).json({
      sucess: true,
      data: todos,
      message: "Entire Todo Data is fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    //extract todo items basis on id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    //data for given id not found
    if (!todo) {
      return res.status(404).json({
        sucess: false,
        message: "No Data Found woth Given Id",
      });
    }
    res.status(200).json({
      sucess: true,
      data: todo,
      message: `Todo ${id} data sucessfully fetched`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};
