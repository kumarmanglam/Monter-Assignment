const express = require("express");

const router = express.Router();

const {
  register,
  login,
  verifyAccount,
  addUserInfo,
} = require("../controller/userController");

router.post("/register", register);
router.post("/verify", verifyAccount);
router.post("/addUserInfo", addUserInfo);
router.post("/login", login);

module.exports = router;
