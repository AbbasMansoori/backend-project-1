const db = require("./database")


const users = [
    {
        email: "stabbing.steve@fuskeluring.hack",
        password: "grillkorv123"
    },
    {
        email: "murdering.mike@fuskeluring.hack",
        password: "bananpaj1337"
    },
    {
       email: "crimes.johnsson@fuskeluring.hack", 
       password: "sötsursås42"

    }
];
function initSeed(db){ //funktion som exporteras till database.js på ett smidigt sett

    //db serialize funktionen för att seeda usersen ovan in i databasen
        for(let user of users){ //for loop där varje user i users läggs in i databasen
            db.run("INSERT INTO users (email, password) VALUES(?,?)",[user.email, user.password], function(err){ //här läggs de in.
                if(err){
                    throw new Error(err.message)
                }
                console.log(`${user.email} ${user.password} INSERTED INTO USERS TABLE`)
            })
        }

}


module.exports = initSeed





// db.serialize(()=>{ //db serialize funktionen för att seeda usersen ovan in i databasen
//     for(let user of users){ //for loop där varje user i users läggs in i databasen
//         db.run("INSERT INTO users (email, password) VALUES(?,?)",[user.email, user.password], function(err){ //här läggs de in.
//             if(err){
//                 throw new Error(err.message)
//             }
//             console.log(`${user.email} ${user.password} INSERTED INTO USERS TABLE`)
//         })
//     }
// })
