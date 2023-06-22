const express = require("express");
const {
  getHomePage,
  getAddPage,
  addUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.get("/add", getAddPage);

router.post("/addDone", addUser);

module.exports = router;
