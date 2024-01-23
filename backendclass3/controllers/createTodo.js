// Import the model
const Todo = require("../models/Todo");

// Define route
exports.createTodo = async (req, res) => {
  try {
    // Extract title and desc from request body
    const { title, description } = req.body;

    // Create a new Todo object and insert in DB
    const response = await Todo.create({ title, description });

    // Send a JSON response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    // Handle error
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};
