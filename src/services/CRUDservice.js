const moment = require("moment");
const connection = require("../config/connection");
const User = require("../models/user");

const getUser = async (key) => {
  if (key) {
    const result = await User.find({
      $or: [
        { name: { $regex: key, $options: "i" } },
        { phoneNumber: { $regex: key, $options: "i" } },
        { email: { $regex: key, $options: "i" } },
      ],
    }).exec();
    return result;
  } else {
    let result = await User.find({}).exec();
    return result;
  }
};

const createUser = async (req) => {
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
};

const updateUser = async (req) => {
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
};

const deleteUser = async (req) => {
  const userId = req.body._id;
  await User.deleteOne({ _id: userId });
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
