//node
// console.log('hi')
import express from 'express'

// import http from 'http'

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) =>{
//     res.statusCode = 200
//     res.setHeader('content-Type', 'text/plain')
//     res.end('Hello World, server side MFs!')
// })

// server.listen(port, hostname, () => {
//     console.log(`Server running at https://${hostname}`)
// })


// const express = require('express')
const app = express()

// Router
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/home', function (req, res) {
  res.json('Based in Kaunas')
})
app.get('/work/:params', function (req, res) {
  res.send('Working in Wilnius')
  console.log(req.params)
})

// get()
// post()
// delete()
// put()

app.listen(3000)