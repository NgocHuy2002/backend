const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("app.ejs");
});
router.get("/asd", (req, res) => {
  res.send("Hello Worldasd!");
});
module.exports = router;
