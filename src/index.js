const express = require("express");
const viewConfig = require("./config/viewConfig");
const webRouter = require("./routers/web");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOSTNAME;
//
viewConfig(app);
//
app.use("/", webRouter);
//
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
