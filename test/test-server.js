var Express = require("express");
var fs = require("fs");
var path = require("path");

var App = new Express();

var indexPath = path.resolve(__dirname, "./index.html");
console.log("indexPath ", indexPath);

App.get("/", function (req, res) {
  res.send(fs.readFileSync(indexPath).toString());
});

App.listen(11111);