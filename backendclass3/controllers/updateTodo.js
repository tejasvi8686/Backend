// Import the model
const Todo = require("../models/Todo");

// Define route
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      {_id: id},
      { title, description, updatedAt: Date.now() } // Fix the typo here    


    )

    // Response
    res.status(200).json({
      success: true,
      data: todo,
      message: `Update successfully`,
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
