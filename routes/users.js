const {Router} = require("express")
const router = new Router()

const userController = require("../controllers/userControllers")



router.post('/login', userController.login)

router.get('/me', userController.me)

router.patch("/me", userController.passwordReset)



module.exports = router

