var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
})

// Create Database
function createDatabase(){
    con.query("CREATE DATABASE mydatabase", function(err, res){
        if(err) throw err;
        console.log("Database successfully created!")
    })
}

con.connect(function(error){
    if(error) throw error;
    createDatabase()
})

