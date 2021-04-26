const express = require("express");
const app = express();
const dotenv = require("dotenv").config()
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userRoutes = require("./routes/users.js")
const errorHandler = require("./middleware/errorHandler")
app.use(express.json() )




app.use("/", userRoutes)
app.use(errorHandler)













const PORT = process.env.PORT || 8080 || 3000

app.listen(PORT, function () {
    console.log(`Server started at ${PORT}`);
  });
  
  