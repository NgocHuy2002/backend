const express = require("express");
const viewConfig = require("./config/viewConfig");
const webRouter = require("./routers/web");
const connection = require("./config/connection");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOSTNAME;
//
viewConfig(app);
//
app.use("/", webRouter);
//
connection();
//
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
