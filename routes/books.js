// Import external libs
const express = require('express')

// Import models
const Book = require('../models/book')

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
  let newBook = new Book({
    title: req.body.title,
    subtitle: req.body.subtitle,
    authors: req.body.authors,
    publisher: req.body.publisher,
    publishedDate: req.body.publishedDate,
    description: req.body.description,
    isbn_13: req.body.isbn_13,
    pageCount: req.body.pageCount,
    catalogedDate: new Date(),
  })

  Book.addBook(newBook, (err, user) => {
    if(err) res.json({success: false, msg: 'Failed to add the book.'})
    else res.json({success: true, msg: 'Book added to the database.'})
  })
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
