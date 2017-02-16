// Import external libs
const mongoose = require('mongoose')

// Import config
const configDB = require('../config/database')

// Book Schema
const BookSchema = mongoose.Schema({
  title: {type: String, required: true},
  subtitle: String,
  authors: [String],
  publisher: {type: String, required: true},
  publishedDate: {type: String, required: true},
  description: String,
  isbn_13: {type: String, required: true},
  pageCount: Number,
  catalogedDate: {type: Date, required: true},
})

const Book = module.exports = mongoose.model('Book', BookSchema)

module.exports.addBook = function(newBook, callback) {
  newBook.save(callback)
}
