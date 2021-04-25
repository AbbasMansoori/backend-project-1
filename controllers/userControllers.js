const { InvalidBody } = require("../errors");
const User = require("../models/userModels");
const {authenticate} = require("../models/userModels")

module.exports = {

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await authenticate(email, password);
      
      let p = token.password
      const passwordmatch = bcrypt.compareSync(password, user.password)
      if(passwordmatch == true){
        const token = jwt.sign(password, process.env.SECRET)
        // res.json(token)
      }else{
        throw new InvalidBody()
      }
      res.json({ token, email });
    } catch (error) {
      next(error);
    }
  },
};
