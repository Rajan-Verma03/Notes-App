const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home");
});
router.get("/subjects", (req, res) => {
  res.send("subjects");
});

module.exports = router;
