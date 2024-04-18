const express = require("express");

const app = express();

app.use(express.json());

const res = require("dotenv").config();

app.get("/api", (req, res) => res.send("Api working"));

app.listen(process.env.PORT, () => console.log("Server running..."));
