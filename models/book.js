// Import external libs
const mongoose = require('mongoose')

// Import config
const configDB = require('../config/database')


// Book Schema
const BookSchema = mongoose.Schema({
  googleId: {type: String, required: true},
  title: {type: String, required: true},
  subtitle: String,
  authors: [String],
  publisher: {type: String, required: true},
  publishedDate: {type: String, required: true},
  description: String,
  isbn_10: {type: String},
  isbn_13: {type: String, required: true},
  pageCount: Number,
  catalogedDate: {type: Date, default: Date.now},
  imageLinks: {
    smallThumbnail: String,
    thumbnail: String
  }
})

const Book = module.exports = mongoose.model('Book', BookSchema)

module.exports.getAll = function(filter, callback) {
  Book.find(filter).exec(callback)
}

module.exports.addBook = function(newBook, callback) {
  newBook.save(callback)
}
