const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB ka connection is successful.");
  } catch (error) {
    console.log("Issue in DB connection");
    console.error(error.message);
    process.exit(1);
  }
};
module.exports = dbConnect;

