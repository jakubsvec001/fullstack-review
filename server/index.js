const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { getReposByUsername } = require('../helpers/github');
const { retrieveAllAndSort } = require('../database/index.js');
let PORT = process.env.PORT || 1128;

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/repos', bodyParser.json(), function(req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  const { userName, sortType } = req.body;
  getReposByUsername(userName, retrieveAllAndSort(sortType, res));
});

app.get('/repos', bodyParser.text(), function(req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  retrieveAllAndSort('createdAt', res)();
});


app.listen(PORT, function() {
  console.log(`listening on PORT ${PORT}`);
});
