var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydatabase"
})

// Create Table
function createTable(){
    con.query("CREATE TABLE Item (ID INT PRIMARY KEY AUTO_INCREMENT, Name VARCHAR(255), Price INT)", function(err, res){
        if(err) throw err;
        console.log("Table successfully created!")
    })
}

con.connect(function(error){
    if(error) throw error;
    createTable()
})

