require('dotenv').config()
const mysql = require('mysql')

let conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

conn.connect(err => {
    if (err)
        console.log(err)
})
module.exports = { conn }