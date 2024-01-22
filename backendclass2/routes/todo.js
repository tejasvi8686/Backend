const express = require("express");
const router = express.Router();

// Import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodo } = require("../controllers/getTodo");

// Define API routes
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);

module.exports = router;