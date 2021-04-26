class UserError extends Error{
    constructor(message){
        super(message)
    }

}

class InvalidBody extends UserError{
    constructor(){
        super()
        this.message = "Invalid body"
        this.errorCode = 400
    }
}



class Unauthorized extends UserError{
    constructor(){
        super("Unauthorized")
        this.message = "Unauthorized"
        this.errorCode = 401
    }
}



  module.exports = {
      UserError,
      InvalidBody,
      Unauthorized,
      
  }