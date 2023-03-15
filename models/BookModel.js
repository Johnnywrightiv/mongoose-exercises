// Need to define Books model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define your schema here
const bookSchema = new Schema({
  title: String,
  author: String,
  pages: Number,
  genre: String,
  rating: Number,
});

// Create the model from the schema
const Book = mongoose.model('Book', bookSchema);

// Export the model
module.exports = Book;
