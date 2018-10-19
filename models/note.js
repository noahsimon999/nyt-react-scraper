// requires mongoos and uses the schema method
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// creates new schema for notes
var noteSchema = new Schema({
  // grabs the products id
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },
  // defines data properties and sets the time as now
  date: {
    type: Date,
    default: Date.now
  },
  // adds text to the note
  noteText: String
});


// readies note for use
var Note = mongoose.model("Note", noteSchema);

module.exports = Note;
