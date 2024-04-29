const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/login", (req, res) => {
  res.send("LOGIN PAGE");
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server running at http://localhost:${process.env.PORT}/`);
});
