const express = require("express");
const {
  getHomePage,
  getAddPage,
  addUser,
  updateUser,
  getId,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.get("/add", getAddPage);

router.post("/addDone", addUser);

router.get("/getId/:id", getId);
router.put("/update", updateUser);

module.exports = router;
