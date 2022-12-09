const express = require("express");
const router = express.Router();
const { generateImage } = require("../controllers/openaiController");

router.post("/generateimage", generateImage);

router.get("/generateimage", (req, res) => {
  console.log("/openai endpoint");
  res.send("/get index page");
});

module.exports = router;
