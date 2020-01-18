const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const getReposByUsername = require("../helpers/github").getReposByUsername;
const retrieveAllAndSort = require("../database/index.js").retrieveAllAndSort;

let app = express();

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.urlencoded({ extended: true }));





app.post("/repos", bodyParser.json(), function(req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  const { userName, sortType } = req.body;
  getReposByUsername(userName, retrieveAllAndSort(sortType, res));
});

app.get("/repos", function(req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
