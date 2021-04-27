const { Unauthorized } = require("../errors");
const { InvalidBody } = require("../errors");
const User = require("../models/userModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Fuser = require("../models/fakeModels");

module.exports = {
  //login endpoint logiken
  async login(req, res, next) {
    try {
      const { email, password } = req.body; //laddar/fyller req.body med parametrarna email och password som man kan skicka som en förfrågan i postman.
      const user = await User.pickUser(email, password); //väntar på resultat från pickUser fron models pickUser functionen

      const passwordmatch = bcrypt.compareSync(password, user.password);
      if (passwordmatch == true) {
        const token = jwt.sign(password, process.env.SECRET);
        res.json({ token });
      } else {
        throw new Unauthorized();
      }
    } catch (error) {
      next(error);
    }
  },

  //me endpoint logiken
  me(req, res, next) {
    const { email } = req.body;
    res.json({ email });
  },

  // fake endpoint logiken
  async fakes(req, res, next) {
    try {  
                     //try skapar variablen getFakes där vi laddar in fakeUser functionen från fakemodels
      const {token} = req.body
      jwt.verify(token, process.env.SECRET)              
      const getFakes = Fuser.fakeUser();
      res.json(getFakes); //response variabeln som vi skapade ovan
    } catch (error) {
      next(error);
    }
  },

  // patch/me endpoint i try catch block då vi tror att det kan hända ett error och vi vill fånga upp den
  async passwordReset(req, res, next) {
    try {
      const { email, password } = req.body; // email och password som skrivs i postmans body som en request
      if (!email || !password) {
        throw new InvalidBody();
      }
      const newHashedPass = bcrypt.hashSync(password); // hashar det som skrivs in i postman body
      await User.update(
        { password: newHashedPass },
        { where: { email: email } }
      ); // updaterar den email som finns i databasen med det nya hashet, notera att den gå in i userModules
      console.log(password); // här är det nya passwordet bytt och vi kan logga det i terminalen
      res.json({ message: `Password is changed, check your email @ ${email}` }); // svara i body i jsonformat
    } catch (error) {
      next(error);
    }
  },
};
