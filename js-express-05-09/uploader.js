import database from './helpers/configs.js'
import {port} from './helpers/configs.js'
import mysql from 'mysql2/promise'
import express from 'express'
import {create} from 'express-handlebars'
import multer from 'multer'

const app = express()

const handlebars = create()

// const multer = multer()

const diskStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads')
    }
})

const upload = multer({
    storage: diskStorage
})

app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')
app.set('views', './views')

const connection = await mysql.createConnection({
    host: database.database_host,
    user: database.user,
    database: database.database
})

const table = 'pictures'

app.get('/', (req, res) => {
    res.render('form')
})

app.post('/upload_file', upload.single('photo'), (req, res) => {
    console.log(req.file)
    res.send('File sent')
})

app.listen(port)