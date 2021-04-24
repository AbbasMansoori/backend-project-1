class UserError extends Error{}

class InvalidBody extends UserError{
    constructor(fields){
        super()
        this.fields = fields
        this.message = "Invalid body"
        this.errorCode = 400
    }
}

class Unauthorized extends UserError{
    constructor(){
        super()
        this.message = "Unauthorized"
        this.errorCode = 401
    }
}

class TokenExpired extends UserError{
    constructor(){
      super()    
      this.message = "Token expired, please log in again"
      this.errorCode = 401
    }
  }

  module.exports = {
      UserError,
      InvalidBody,
      Unauthorized,
      TokenExpired
  }