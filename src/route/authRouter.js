const express = require("express");

const router = expresss.Router();

const {
  register,
  login,
  verifyAccount,
  addUserInfo,
} = require("../controller/userController");

app.post("/register", register);
app.post("/verfiy", verifyAccount);
app.post("/addUserInfo", addUserInfo);
app.post("/login", login);
