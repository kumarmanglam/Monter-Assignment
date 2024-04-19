require("dotenv").config({ path: "../../.env" });

const jwt = require("jsonwebtoken");
const generateToken = (email) => {
  return jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: "30d" });
};

module.exports = { generateToken };
