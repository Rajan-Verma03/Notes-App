const mongoose = require("mongoose");
const path = require("path");

const connectDB = () => {
  const db =
    "mongodb+srv://rajan_verma:rajanverma03@notesdb.l6u66.mongodb.net/notesapp?retryWrites=true&w=majority";
  const con = mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(console.log(`MongoDB Connected`))
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDB;
