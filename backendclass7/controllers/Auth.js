const bcrypt = require("bcrypt");
const User = require("../models/User");

//signup route handler
exports.signup = async (req, res) => {
  try {
    //get data
    const { name, email, password, role } = req.body;
    //check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false, // corrected 'sucess' to 'success'
        message: "User already exists", // changed 'Exists' to 'exists'
      });
    }

    // secure password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot register, please try again",
    });
  }
};
