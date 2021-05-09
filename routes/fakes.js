const {Router} = require("express")
const router = new Router()
const throttle = require("express-throttle");

const fakeController = require("../controllers/fakeControllers")



router.get('/generate', throttle({ "burst": 10, "period": "24h" }), fakeController.fakes)


module.exports = router