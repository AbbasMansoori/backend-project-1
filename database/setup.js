const db = require("../database/connection");
require("../models/userModels.js")
require("../models/fakeModels.js")



db.sync()