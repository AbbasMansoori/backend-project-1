class UserError extends Error {}

class InvalidBody extends UserError {
  constructor() {
    super("Invalid Body");
    this.message = "Invalid body";
    this.errorCode = 400;
  }
}
class InvalidToken extends UserError {
  constructor() {
    super("Invalid Token");
    this.message = "Invalid Token";
    this.errorCode = 400;
  }
}

class Unauthorized extends UserError {
  constructor() {
    super("Unauthorized");
    this.message = "Unauthorized";
    this.errorCode = 401;
  }
}

module.exports = {
  UserError,
  InvalidBody,
  Unauthorized,
  InvalidToken,
};
