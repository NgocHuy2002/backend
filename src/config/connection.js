const mongoose = require("mongoose");
require("dotenv").config();

const dbState = [
  {
    value: 0,
    label: "disconnected",
  },
  {
    value: 1,
    label: "connected",
  },
  {
    value: 2,
    label: "connecting",
  },
  {
    value: 3,
    label: "disconnecting",
  },
];

const connection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dnhuy2012:Dnhuy2012%40@cluster0.dqdrz.mongodb.net/"
    );
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find((f) => f.value == state).label, "to db"); // connected to db
  } catch (error) {
    console.log("Error :", error);
  }
};

module.exports = connection;
