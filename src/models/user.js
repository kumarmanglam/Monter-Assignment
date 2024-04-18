const connection = require("../config/dbConnection");

const { Schema, model } = connection;

// create a user schema
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

// create a model from schema
const userModel = model("users", userSchema);

// export user model
module.exports = userModel;
