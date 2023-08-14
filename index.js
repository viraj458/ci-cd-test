// importing express framework
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  return res.send("Hello World");
});

app.get("/me", function (req, res) {
  return res.send("me");
});
// listen to port 4000 by default
app.listen(process.env.PORT || 4000, () => {
  console.log("Server is running");
});
module.exports = app;
