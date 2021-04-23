const express = require("express");
const app = express();
const dotenv = require("dotenv").config()
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const logger = require("./middleware/logger")
app.use(express.json())

const PORT = process.env.PORT || 8080 || 3000

//testa middleware

app.use(logger)

app.use("/api/users", require("./routes/userroutes"))




app.listen(PORT, function () {
    console.log(`Server started at ${PORT}`);
  });
  
  