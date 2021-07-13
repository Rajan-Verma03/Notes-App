import express from "express";
import SubjectModel from "../models/model.js";

const router = express.Router();

// get subjects from db
router.get("/", async (req, res) => {
  try {
    const allSubjects = await SubjectModel.find();
    res.json(allSubjects);
  } catch (err) {
    console.log(err);
    res.json({
      message: err,
    });
  }
});

// get specific subject from db
router.get("/:id", async (req, res) => {
  try {
    const oneSubject = await SubjectModel.findById(req.params.id);
    res.json(oneSubject);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

// Add a subject in db
router.post("/", async (req, res) => {
  const subject = new SubjectModel({
    name: req.body.name,
    chapterCount: req.body.chapterCount,
  });
  try {
    const savedSubject = await subject.save();
    res.json(savedSubject);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});
export default router;
