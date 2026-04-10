const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  text: String,
});

module.exports = mongoose.model("Note", NoteSchema);