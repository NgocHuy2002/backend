const User = require("../models/user");
const moment = require("moment");

const getHomePage = async (req, res) => {
  let key = req.params.key;
  if(key){
    const result = await User.find({
      $or: [
        { name: { $regex: key, $options: "i" } },
        { phoneNumber: { $regex: key, $options: "i" } },
        { email: { $regex: key, $options: "i" } },
      ],
    });
    res.json(result);
  }
  else{
    const result = await User.find({})
    res.json(result);
  }

  // const result = await User.find({});

  // res.send(key)
};
const addUser = async (req, res) => {
  let name = req.body.name;
  let phoneNumber = req.body.phone;
  let birth = moment(req.body.birth).format("YYYY-MM-DD");
  let email = req.body.email;
  await User.create({
    name,
    phoneNumber,
    birth,
    email,
  });
  res.send("add suscced");
};

const postUpdateUser = async (req, res) => {
  let name = req.body.name;
  let phoneNumber = req.body.phone;
  let birth = moment(req.body.birth).format("YYYY-MM-DD");
  let email = req.body.email;
  let id = req.body.id;
  await User.updateOne(
    { _id: id },
    {
      name,
      phoneNumber,
      birth,
      email,
    }
  );

  res.send("update succeed");
};

// const getUpdateUser = async (req, res) => {
//   const userId = req.params.id;
//   let user = await User.findById(userId).exec();
//   res.json(user);
// };

const deleteUser = (req, res) => {
  res.render("add.ejs");
};

const postHandleRemoveUser = async (req, res) => {
  const userId = req.body._id;
  await User.deleteOne({ _id: userId });
  res.send(userId);
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
  deleteUser,
  postHandleRemoveUser,
};
