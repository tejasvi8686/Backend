//import mongoose
const mongoose = require("mongoose");

//route handler
const commnetSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post", //refrence to the post model
  },

  users: {
    type: String,
    required: true,
  },

  body: {
    type: string,
    required: true,
  },
});

//export
module.exports = mongoose.model("comment", commnetSchema);

//34 min video stoped
