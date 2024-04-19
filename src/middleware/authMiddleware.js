const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../../.env" });

const user = require("../models/user");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decodeToken = jwt.verify(token, process.env.SECRET_KEY);
      const userExists = await user.findOne({ email: decodeToken.email });
      if (!userExists) {
        res.status(401).json({ error: "invalid jwt" });
      }
      req.user = userExists;
      next();
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }
};

module.exports = protect;
