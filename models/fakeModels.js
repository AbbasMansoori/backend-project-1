const db = require("../database/connection")
const faker = require("faker")
const {DataTypes} = require("sequelize")


const Fuser = db.define("fuser", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },

    occupation: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },

    picture: {
      type: DataTypes.BLOB,
      allowNull: false,
      
    }})



Fuser.fakeUser = () => {
    //vi skapar ett tomt object som vi fyller med parametrar såsom name, adress osv.
    // i objectet fakeusers som är tomt lägger vi in keys inom hakparanteser["name"] och valuen ett fakenamn från fake.name.findname()
    const fakeUsers = {};
    fakeUsers["name"] = faker.name.findName()
    fakeUsers["address"] = faker.address.streetAddress()
    fakeUsers["occupation"] = faker.name.jobTitle()
    fakeUsers["picture"] = faker.image.avatar()
    return fakeUsers
 }


module.exports = Fuser