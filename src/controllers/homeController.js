const User = require("../models/user");

const getHomePage = (req, res) => {
  res.render("app.ejs");
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
const getAddPage = (req, res) => {
  res.render("add.ejs");
};
module.exports = { getHomePage, getAddPage, addUser };
