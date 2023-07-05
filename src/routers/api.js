const express = require("express");
const {
  getHomePage,
} = require("../controllers/homeController");
const routerAPI = express.Router();

router.get("/", getHomePage);

module.exports = routerAPI;
