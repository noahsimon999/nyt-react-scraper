// require mongoose package
var mongoose = require("mongoose");

// creates schema using mongoose method
var Schema = mongoose.Schema;

// creates new schema 
var headlineSchema = new Schema({
  // defines headline properties
  headline: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  // defines summary properties
  summary: {
    type: String,
    required: true
  },
  // defines url properties
  url: {
    type: String,
    required: true
  },
  // defines date properties
  date: {
    type: Date,
    default: Date.now
  },
  // defines saved properties, either true or false
  saved: {
    type: Boolean,
    default: false
  }
});

// creates Headline model and readies it for use
var Headline = mongoose.model("Headline", headlineSchema);

module.exports = Headline;
