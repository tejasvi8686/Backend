// Import the model
const Todo = require("../models/Todo");

// Define route
exports.deleteTodo = async (req, res) => {
  try {
     const {id} = req.params;
     await Todo.findByIdAndDelete(id);

     res.json({
        success:true,
        message:"Todo Deleted"
     })
    
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

