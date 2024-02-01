const bcrypt = require("bcrypt");
const User = require("../models/User");

//signup route handler
exports.signup = async (req, res) => {
  try {
    //get data
    const { name, email, password, role } = req.body;
    //check if user alredy exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        sucess: false,
        message: "user already Exists",
      });
    }
  } catch (error) {
    // secure password
    let hashedPassword;

    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      return res.status(500).json({
        sucess: false,
        message: "Error inn hashing Password",
      });
    }
  }
};
