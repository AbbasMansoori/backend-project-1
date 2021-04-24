const db = require("../database/connection");
const User = require("../models/userModels")
const bcrypt = require("bcryptjs")

const users = [
    {
        password: "grillkorv",
        email: "stabbing.steve@fuskeluring.hack"
    },
    {
        password: "bananpaj1337",
        email: "murdering.mike@fuskeluring.hack"
    },
    {
        password: "sötsursås",
        email: "crimes.johnsson@fuskeluring.hack"
    }
]

async function userSeed() {
    for(let user of users) {
        await User.create({
            password: bcrypt.hashSync(user.password, 10),
            email: user.email
        })
    }
}

userSeed()