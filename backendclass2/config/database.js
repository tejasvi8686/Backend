const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    const connectDB = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopoLogy: true,
    });
    console.log(`MongoDB connecteds ${connectDB.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectionDB;