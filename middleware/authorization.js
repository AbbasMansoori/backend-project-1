
const jwt = require("jsonwebtoken")


// Middleware som ser till att du måste lägga in en authtoken från den usern som loggat in i bearer headern i tex insomnia
//för att sedan kunna byta password, om inte token läggs in så får man felmeddelande
const tokenAuth = (req, res, next) => {
    try{
        const authorization = req.headers.authorization
        if(!authorization){
            throw new Error
        }
        const token = authorization.replace("Bearer ", "")
        req.user = jwt.verify(token, process.env.SECRET)
        next()
    }catch(error){
        next(error)
    }
}


module.exports = tokenAuth