const express = require("express");
const { getHomePage, getASD } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.get("/asd", getASD);

module.exports = router;
