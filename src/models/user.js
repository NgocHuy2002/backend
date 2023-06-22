const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  birth: Date,
  email: String,
});

const User = mongoose.model("user", userSchema);

module.exports = User;
