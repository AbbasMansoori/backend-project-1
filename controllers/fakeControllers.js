const Fuser = require("../models/fakeModels");
const jwt = require("jsonwebtoken");

module.exports = {
  // fake endpoint logiken där man måste lägga in en token från den user som loggat in för att kunna generera fakeusers
  async fakes(req, res, next) {
    try {
      //try skapar variablen getFakes där vi laddar in fakeUser functionen från fakemodels
      const { authorization } = req.headers;
      console.log(authorization);
      const token = authorization.replace("Bearer ", ""); // här ersätter vi Bearer med en tom string med funktionen replace
      jwt.verify(token, process.env.SECRET);
      const getFakes = Fuser.fakeUser();
      res.json(getFakes); //response variabeln som vi skapade ovan
    } catch (error) {
      next(error);
    }
  },
};
