// Import external libs
const express = require('express')

// Import models
const Book = require('../models/book')

// Import parser
const bookParser = require('../parse/bookParser')

const router = express.Router()

// Get all the books in the database
router.get('/', (req, res, next) => {

})

// Get a specific book
router.get('/:id', (req, res, next) => {
  res.send("THIS IS A SPECIFIC BOOK " + req.params.id)
})

// Add a new book
router.post('/', (req, res, next) => {
  const url = 'https://www.googleapis.com/books/v1/volumes/' + req.body.bid + '?fields=id,volumeInfo(title,subtitle,authors,publisher,publishedDate,description,industryIdentifiers,pageCount,categories,imageLinks(smallThumbnail,thumbnail))'
  bookParser.getJSON(url).then((book) => {
    let newBook = new Book({
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      authors: book.volumeInfo.authors,
      publisher: book.volumeInfo.publisher,
      publishedDate: book.volumeInfo.publishedDate,
      description: book.volumeInfo.description,
      isbn_13: book.volumeInfo.industryIdentifiers[1].identifier,
      pageCount: book.volumeInfo.pageCount,
      catalogedDate: new Date(),
    })

    Book.addBook(newBook, (err, user) => {
      if(err) res.json({success: false, msg: 'Failed to add the book.'})
      else res.json({success: true, msg: 'Book added to the database.'})
    })
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
