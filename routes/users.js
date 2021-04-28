const {Router} = require("express")
const router = new Router()
const tokenAuth = require('../middleware/authorization')
const userController = require("../controllers/userControllers")



router.post('/login', userController.login)

router.get('/me', userController.me)

router.patch("/me", tokenAuth, userController.passwordReset)



module.exports = router

