const {UserError} = require('../errors')
const {BaseError} = require('sequelize')


function errorHandler(error, req, res, next){
    if(error instanceof UserError){
        res.status(400).json({error: error.message})

    } else if(error instanceof BaseError){
        res.status(400).json({error: error.message})

    }else{
        console.log(error)
        res.status(500).json({error: "Something went wrong!!"})
    }
    
}




module.exports = errorHandler