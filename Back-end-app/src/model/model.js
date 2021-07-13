const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  chapterCount: {
    type: Number,
  },
});
const Subjectdb = mongoose.model("Subject", subjectSchema);
module.exports = Subjectdb;
