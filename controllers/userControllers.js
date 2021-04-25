const { Unauthorized } = require("../errors");
const User = require("../models/userModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  async login(req, res, next) {
    try {
      const { email, password } = req.body; //laddar/fyller req.body med parametrarna email och password som man kan skicka som en förfrågan i postman.
      const user = await User.pickUser(email, password); //väntar på resultat från pickUser fron models pickUser functionen

      const passwordmatch = bcrypt.compareSync(password, user.password);
      if (passwordmatch == true) {
        const token = jwt.sign(password, process.env.SECRET);
        res.json({ token, email });
        
      } else {
        throw new Unauthorized();
      }
    } catch (error) {
      next(error);
    }
  },
  


  
};

