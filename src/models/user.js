const connection = require("../config/dbConnection");

const { Schema, model } = connection;

// create a user schema
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  location: String,
  age: Number,
  workDetails: String,
  OTP: Number,
  status: { type: String, enum: ["pending", "verified"], default: "pending" },
});

// create a model from schema
const userModel = model("users", userSchema);

// export user model
module.exports = userModel;
