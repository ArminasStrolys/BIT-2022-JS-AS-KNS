import database from './helpers/configs.js'
import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: database.database_host,
    user: database.user,
    database: database.database
})

connection.query("INSERT INTO clients (company) VALUES('Apple')", (err, result) => {
    console.log('DONE')
    if (err){
        console.log('Error: ', err)
        return
    }
})

connection.query('SELECT * FROM clients WHERE id > 1', (err, results, fields) => {
    if (err){
        console.log(err)
        return
    }
    console.log(results)
    // console.log(fields)
})

console.log('TEST')
console.log(database)