// const User = require("../models/userModels")
// const jwt = require("jsonwebtoken")



// const tokenAuth = (req, res, next) => {
//     try{
//         const auth = req.headers.authorization
//         if(!auth){
//             throw new Error
//         }
//         const token = authorization.replace("Bearer", "")
//         req.user = jwt.verify(token, process.env.SECRET)
//         next()
//     }catch(error){
//         next(error)
//     }
// }


// module.exports = tokenAuth