const {Router} = require("express")
const router = new Router()

const userController = require("../controllers/userControllers")



router.post('/login', userController.login)

router.get("/me", function(req, res){
  res.json("veeeeemeeeeduuuuuuuuuu")
})



module.exports = router

