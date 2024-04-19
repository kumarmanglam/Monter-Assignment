const nodemailer = require("nodemailer");
const userModel = require("../models/user");
require("dotenv").config({ path: "../../.env" });

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "kumarbackups01@gmail.com",
    pass: "uxxxtaezuunpfwub",
  },
});

const sendOTP = async (email, OTP) => {
  try {
    // console.log(process.env.EMAIL_USER, process.env.EMAIL_PASSWORD);

    // console.log(email, OTP);
    await transporter.sendMail({
      from: `"monterAssignment" <${process.env.EMAIL_USER}>`,
      to: [email],
      subject: "OTP Verification",
      text: `Your OTP for email verification is: ${OTP}`,
    });
    console.log(`OTP sent to ${email}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = { sendOTP };
