const mongoose = require("mongoose");
const express = require("express");
// require("../src/db/connections");
const routes = require("./routes/router");
const Subjectdb = require("../src/model/model");

const app = express();
const port = 4000;

const connectDB = () => {
  const db =
    "mongodb+srv://rajan_verma:rajanverma03@subjectnotes.l6u66.mongodb.net/subjectData?retryWrites=true&w=majority";
  const con = mongoose
    .connect(
      `mongodb+srv://rajan_verma:rajanverma03@subjectnotes.l6u66.mongodb.net/subjectData?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
      () => {
        console.log("Db Connected..");
      }
    )
    .then(console.log(`MongoDB Done`))
    .catch((err) => {
      console.log(err);
    });
};
app.use(express.json());
app.post("/subjects", (req, res) => {
  const addSubjects = new Subjectdb(req.body);
  const insertSubject = addSubjects
    .save()
    .then(res.status(201).send("data added"))
    .catch((e) => {
      console.log(e);
    });
});
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/subjects", (req, res) => {
  res.send("Subject");
});

app.listen(port, () => {
  console.log("app is listening...");
});
