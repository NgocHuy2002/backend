const User = require("../models/user");
const moment = require("moment");
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../services/CRUDservice");

const getHomePage = async (req, res) => {
  let key = req.params.key;
  let result = await getUser(key);
  res.json(result);
};
const addUser = async (req, res) => {
  await createUser(req);
  res.send("add suscced");
};

const postUpdateUser = async (req, res) => {
  await updateUser(req);
  res.send("update succeed");
};

// const deleteUser = (req, res) => {
//   res.render("add.ejs");
// };

const postHandleRemoveUser = async (req, res) => {
  // const userId = req.body._id;
  // await User.deleteOne({ _id: userId });
  await deleteUser(req);
  // res.send(userId);
};

const getAddPage = (req, res) => {
  res.render("add.ejs");
};
module.exports = {
  getHomePage,
  getAddPage,
  addUser,
  postUpdateUser,
  // getUpdateUser,
  // deleteUser,
  postHandleRemoveUser,
};
