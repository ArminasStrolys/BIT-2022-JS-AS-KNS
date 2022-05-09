import database from './helpers/configs.js'
import mysql from 'mysql2/promise'
// import mysql from 'mysql2'

// const connection = mysql.createConnection({
//     host: database.database_host,
//     user: database.user,
//     database: database.database
// })

const connection = await mysql.createConnection({
    host: database.database_host,
    user: database.user,
    database: database.database
})

// Getting all data

const select =await connection.query("SELECT * FROM clients")


// add data with promises
const insert = await connection.query("INSERT INTO clients (company) VALUES('UBER')")

const lastInserted = insert[0].insertId

// console.log(insert)

const update = await connection.query("UPDATE clients SET company = \"Coherent Solutions\" WHERE id = " + lastInserted)

// console.log(update)

// ? <- in this position should be inserted variable
const remove = await connection.query("DELETE FROM clients WHERE id = ?", lastInserted)

console.log(remove)
console.log(select[0])
// connection.query("INSERT INTO clients (company) VALUES('Apple')", (err, result) => {
//     console.log('DONE')
//     if (err){
//         console.log('Error: ', err)
//         return
//     }
// })

// connection.query('SELECT * FROM clients WHERE id > 1', (err, results, fields) => {
//     if (err){
//         console.log(err)
//         return
//     }
//     console.log(results)
//     // console.log(fields)
// })

// console.log('TEST')
// console.log(database)