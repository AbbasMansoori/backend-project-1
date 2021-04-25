const db = require("../database/connection");
const { DataTypes } = require("sequelize");
const { InvalidBody } = require("../errors");

const User = db.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.authenticate = async (email, password) => {
  return new Promise((resolve, reject) => {
    const user = User.findOne({ where: { email } });
    resolve(user)
    if (!user) {
      reject (new InvalidBody());
    }

    
  });
};

module.exports = User;
