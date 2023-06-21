const getHomePage = (req, res) => {
  res.render("app.ejs");
};
const getASD = (req, res) => {
  res.send("Hello Worldasd!");
};
module.exports = { getHomePage, getASD };
