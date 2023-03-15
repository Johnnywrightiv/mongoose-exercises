// Need to define Person model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define your schema here
const personSchema = new Schema({
  hair: String,
  eyes: String,
  weight: Number,
  height: Number,
  salary: Number,
  numKids: Number,
  kids: [], // [String] for arr of strings, [] for arr of ObjectIDs.
});

// Create the model from the schema
const Person = mongoose.model('Person', personSchema);

// Export the model
module.exports = Person;
