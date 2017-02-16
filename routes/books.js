// Import external libs
const express = require('express')

const router = express.Router()

// Get all the books in the database
router.get('/', (req, res, next) => {
  res.send('ALL THE BOOKS')
})

// Get a specific book
router.get('/:id', (req, res, next) => {
  res.send("THIS IS A SPECIFIC BOOK " + req.params.id)
})

// Add a new book
router.post('/', (req, res, next) => {
  res.send("A NEW BOOK ADDED")
})

// Update an existing book
router.put('/:id', (req, res, next) => {
  res.send("AN EXISTING BOOK IS UPDATED")
})

// Delete an existing book
router.delete('/:id', (req, res, next) => {
  res.send("AN EXISTING BOOK IS DELETED")
})

module.exports = router
