const User = require("../models/userModels");
const db = require("../database/connection");
const { DataTypes = require("sequelize") };
const faker = require("faker");
const Fuser = db.define("fuser", {
//   De skapade uppgifterna ska innehålla namn, 
//   adress, yrke, födelsedatum, hemort, en 
//   personlig egenskap (såsom Cat lover eller Ballon Enthusiast), 
//   och en bild. 
//   För samtliga dessa kan du använda Faker för att generera.

    name : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    address : {
        type: DataTypes.STRING,
        allowNull: false,
        

    },

    occupation : {
        type: DataTypes.STRING,
        allowNull: false,
    },

    dateOfBirth : {
        type: DataTypes.NUMBER,
        allowNull: false,
    },

    locale : {

        type: DataTypes.STRING,
        allowNull: false,


    },

    characterType : {
        type: DataTypes.STRING,
        allowNull: false,
    },

    picture : {
        type: DataTypes.STRING, //ska detta vara en länk?
        allowNull: false,
    }




})
