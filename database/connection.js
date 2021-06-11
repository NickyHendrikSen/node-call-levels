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