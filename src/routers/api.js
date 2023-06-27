const express = require("express");
const {
  getHomePage,
  getAddPage,
  addUser,
  postUpdateUser,
  getUpdateUser,
  deleteUser,
  postHandleRemoveUser,
} = require("../controllers/homeController");
const routerAPI = express.Router();

router.get("/", getHomePage);

module.exports = routerAPI;
