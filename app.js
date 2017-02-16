// Import external libs
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

// Import core libs
const path = require('path')


const app = express()

const port = 3000

// index router
app.use('/', (req, res) => {
  res.send('Hello')
})

// Start the server
app.listen(port, () => {
  console.log('Server started on port ' + port)
})
