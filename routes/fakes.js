const {Router} = require("express")
const router = new Router()

const fakeController = require("../controllers/fakeControllers")



router.get('/generate', fakeController.fakes)


module.exports = router