const express = require("express");
const router = express.Router();

const { login, signup } = require("../controllers/Auth"); // Added a semicolon at the end

// router.post("/login", login);
router.post("/signup", signup);

module.exports = router; // Changed "module.exports =router;" to "module.exports = router;"
