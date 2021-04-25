const {Router} = require("express")
const router = new Router()

const userController = require("../controllers/userControllers")


router.post('/auth', userController.login)
router.post('/login', userController)


module.exports = router

