const User = require("../models/user");

const getHomePage = async (req, res) => {
  const result = await User.find({});
  // console.log(resu)
  // res.render({ listUser: result });
  res.json(result);
};
const addUser = async (req, res) => {
  let name = req.body.name;
  let phoneNumber = req.body.phone;
  let birth = req.body.birth;
  let email = req.body.email;
  // console.log(birth);
  await User.create({
    name,
    phoneNumber,
    birth,
    email,
  });
  res.send("add suscced");
};

const updateUser = async (req, res) => {
  res.send("update suscced");
};

const getId = async (req, res) => {
  const userId = req.params.id;
  let user = await User.findById(userId).exec();
  // console.log("userId", userId);
  res.json(user);
  // res.render("update.ejs");
};

const getAddPage = (req, res) => {
  res.render("add.ejs");
};
module.exports = { getHomePage, getAddPage, addUser, updateUser, getId };
