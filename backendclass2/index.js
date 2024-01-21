const express = require("express");
const app = express();

// Load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON request body
app.use(express.json());

// Import routes for TODO API
const todoRoutes = require("./routes/todo");

// Route the API routes
app.use("/api/v1", todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`server started successfully at ${PORT}`);
});

// Connect to the database
const dbConnect = require("./config/database");
dbConnect();

// Default routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Todo App</h1>");
});