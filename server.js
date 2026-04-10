const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// MongoDB Connection
mongoose.connect("mongodb://mongo:27017/notesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Note = require("./models/Note");

// Routes
app.post("/add", async (req, res) => {
  const note = new Note({ text: req.body.text });
  await note.save();
  res.send("Note added");
});

app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

app.listen(3000, () => console.log("Server running on port 3000"));