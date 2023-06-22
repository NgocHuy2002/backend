const mongoose = require("mongoose");
require("dotenv").config();

const dbState = [
  {
    value: 0,
    label: "Disconnected",
  },
  {
    value: 1,
    label: "Connected",
  },
  {
    value: 2,
    label: "Connecting",
  },
  {
    value: 3,
    label: "Disconnecting",
  },
];

const connection = async () => {
  try {
    const options = {
      user: process.env.DB_NAME,
      pass: process.env.PASS,
    };
    await mongoose.connect(
      "mongodb+srv://cluster0.dqdrz.mongodb.net/",
      options
    );
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find((f) => f.value == state).label, "to db"); // connected to db
  } catch (error) {
    console.log("Error :", error);
  }
};

module.exports = connection;
