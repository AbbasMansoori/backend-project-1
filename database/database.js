const sqlite = require("sqlite3")
const db = new sqlite.Database("database/fuskeluring.db")
const initSeed = require("../database/seed")

db.serialize(() => {
    db.run("DROP TABLE IF EXISTS users")
    db.run("DROP TABLE IF EXISTS fakes")
    db.run(`CREATE TABLE "users" ("userId" INTEGER, "email" TEXT NOT NULL, "password" TEXT NOT NULL, PRIMARY KEY ("userId" AUTOINCREMENT));`)
    db.run(`CREATE TABLE "fakes" ("fakeId" INTEGER, "belongsToUser" INTEGER, "adress" TEXT NOT NULL, "city" TEXT NOT NULL, "DOB" INTEGER, "fun_fact" TEXT NOT NULL, "picture" TEXT NOT NULL, "occupation" TEXT NOT NULL, PRIMARY KEY ("fakeID" AUTOINCREMENT), FOREIGN KEY ("belongsToUser") REFERENCES "users"(userId));`)
    db.get("PRAGMA foreign_keys = ON")
    initSeed(db)// denna funktion är importerad från seed.js filen och fyller database med users arrayed in seed.js
})











module.exports = db