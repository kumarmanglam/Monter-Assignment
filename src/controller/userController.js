const userModel = require("../models/user");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/auth");
const { sendOTP } = require("../utils/email");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }
    const OTP = Math.floor(1000 + Math.random() * 9000);
    await sendOTP(email, OTP);

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      OTP,
    });
    await newUser.save();

    res.status(200).json({ message: "OTP sent to your email", email });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const verifyAccount = async (req, res) => {
  try {
    const { email, OTP } = req.body;
    const user = await userModel.findOne({ email, OTP, status: "pending" });
    if (!user) {
      return res.status(400).json({ error: "Invalid OTP or Email" });
    }
    user.status = "verified";
    await user.save();

    res.status(200).json({ message: "Account verified successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const addUserInfo = async (req, res) => {
  try {
    const { email, location, age, workDetails } = req.body;
    const user = await userModel.findOne({ email, status: "verified" });
    if (!user) {
      return res.status(400).json({ error: "User not found or not verified" });
    }
    user.location = location;
    user.age = age;
    user.workDetails = workDetails;
    await user.save();

    res.status(200).json({ message: "User information added successfully" });
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email, status: "verfied" });
    if (!user) {
      return res.status(404).json({ error: "User not found or not verfied" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(404).json({ error: "Password is incorrect" });
    }
    const token = await generateToken(user.email);
    res.status(200).json({
      email: user.email,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Server Error" });
  }
};

module.exports = { register, verifyAccount, addUserInfo, login };
