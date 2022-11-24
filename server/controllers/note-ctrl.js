const Note = require("../models/note-model");

createNote = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      error: "You must provide a note",
    });
  }

  const note = new Note(body);

  if (!note) {
    return res.status(400).json({ error: err });
  }

  note
    .save()
    .then(() => {
      return res.status(201).json({
        id: note._id,
        message: "Note created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Note not created!",
      });
    });
};

updateNote = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      error: "You must provide a body to update",
    });
  }

  Note.findOne({ _id: req.params.id }, (err, note) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Note not found!",
      });
    }

    note.note = body.note;
    note
      .save()
      .then(() => {
        return res.status(200).json({
          id: note._id,
          message: "Note updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Note not updated!",
        });
      });
  });
};

deleteNote = async (req, res) => {
  await Note.findOneAndDelete({ _id: req.params.id }, (err, note) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    if (!note) {
      return res.status(404).json({ error: `Note not found` });
    }

    return res.status(200).json({ note });
  }).catch((err) => console.log(err));
};

getNotes = async (req, res) => {
  await Note.find({}, (err, notes) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    return res.status(200).json({ notes });
  }).catch((err) => console.log(err));
};

module.exports = {
  createNote,
  updateNote,
  deleteNote,
  getNotes,
};
