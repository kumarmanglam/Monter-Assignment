const express = require("express");
const authRouter = require("./src/route/authRouter");
const protect = require("./src/middleware/authMiddleware");
const { getUserInfo } = require("./src/controller/userController");
const app = express();

app.use(express.json());

const res = require("dotenv").config();

app.use("/", authRouter);
app.get("/user", protect, getUserInfo);

app.listen(process.env.PORT, () => console.log("Server running..."));
