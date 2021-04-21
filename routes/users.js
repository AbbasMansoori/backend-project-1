const express = require("express")
const router = express.Router()
const users = require("../migrations/users")


// testa våran routes och att få tillbaka users från usersfilen
// router.get används istället för app.get när vi använder routes
// can ersätta router.get med / för vi har det i index.js i root
router.get("/", function(req, res){
    res.json(users)
  })
  


  module.exports = router