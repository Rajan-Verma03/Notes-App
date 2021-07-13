import mongoose from "mongoose";

const SubjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  chapterCount: {
    type: Number,
  },
});
const Subjectdb = mongoose.model("Subject", SubjectSchema);
export default Subjectdb;
