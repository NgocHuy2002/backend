const express = require("express");
const viewConfig = require("./config/viewConfig");
const router = require("./routers/web");
const connection = require("./config/connection");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOSTNAME;

app.use(cors({ credentials: true, origin: "*" }));
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.json()); // Used to parse JSON bodies
//
viewConfig(app);
//
app.use("/", router);

(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Error at index.js: ", error);
  }
})();
//
