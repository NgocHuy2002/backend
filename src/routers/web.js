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
const router = express.Router();

router.get("/:key", getHomePage);
router.get("/", getHomePage);


router.get("/add", getAddPage);
//  ADD
router.post("/addDone", addUser);
// UPDATE
// router.get("/update/:id", getUpdateUser);
router.put("/update-user", postUpdateUser);
// DELETE
// router.post("/delete-user/:id", deleteUser);
router.post("/delete-user", postHandleRemoveUser);

module.exports = router;
