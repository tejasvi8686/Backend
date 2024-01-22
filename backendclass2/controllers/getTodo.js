// Import the model
const Todo = require("../models/Todo");

// Define route
exports.getTodo = async (req, res) => {
  try {

    //fetch all todo items from database 
    const todos = await Todo.find({});

    //response
    res.status(200)
    .json({
        sucess:true,
        data: todos,
        message:"Entire Todo Data is fetched",

    });
  } catch (err) {
    console.error(err);
    res.status(500)
    .json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
   
  }
};