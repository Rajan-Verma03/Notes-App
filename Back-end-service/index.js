import express from "express";
import subjectRoutes from "./routes/subjects.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middlewares with Routes
app.use(express.json());
app.use("/api/subjects", subjectRoutes);

// DB
mongoose.connect(
  "mongodb+srv://rajan_verma:rajanmongo03@notesapp.l6u66.mongodb.net/SubjectsDb?retryWrites=true&w=majority",
  //process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log("Db Connected..");
  }
);
app.listen(port, () => console.log(`app listening at ${port}`));
