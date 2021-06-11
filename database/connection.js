var mysql = require('mysql')

var pool = mysql.createPool({
    connectTimeout: 5000,
    connectionLimit: 20,
    user: 'root',
    database: 'mydatabase',
    host: 'localhost',
    port: '3306'
})

let db = {};

db.getItem = () => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM Item", (err, res) => {
            if(err) return reject(err)
            return resolve(res)
        })
    })
}

db.insertItem = (name, price) =>{
    return new Promise((resolve, reject) => {
        pool.query("INSERT INTO Item(Name, Price) VALUES(?, ?)",[name, price], (err, res) => {
            if(err) return reject(err)
            return resolve(res)
        })
    })
}

db.editItem = (id, name, price) =>{
    return new Promise((resolve, reject) => {
        pool.query("UPDATE Item SET Name = ?, Price = ? WHERE ID = ?" , [name, price, id], (err, res) => {
            if(err) return reject(err)
            return resolve(res)
        })
    })
}

db.deleteItem = (id) =>{
    return new Promise((resolve, reject) => {
        pool.query("DELETE FROM Item WHERE ID = ?" , [id], (err, res) => {
            if(err) return reject(err)
            return resolve(res)
        })
    })
}

module.exports = db