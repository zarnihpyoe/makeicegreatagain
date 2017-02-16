// Import external libs
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

// Import core libs
const path = require('path')

// Import routers
const books = require('./routes/books')


const app = express()

// Adding middlewares
app.use(cors())
app.use(bodyParser.json())

// Registering routers
app.use('/books', books)

// index router
app.use('/', (req, res) => {
  res.send('Hello')
})

// Start the server at port 3000
const port = 3000
app.listen(port, () => {
  console.log('Server started on port ' + port)
})
