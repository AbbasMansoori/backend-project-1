const db = require("../database/connection");
require("../models/userModels.js")
requiew("../models/fakeModels.js")



db.sync()