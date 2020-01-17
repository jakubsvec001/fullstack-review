const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fetcher");

let repoSchema = mongoose.Schema({
  id : mongoose.ObjectId,
  repoId:  {type: Number, required: true, unique: false},
  repoName: {type: String,required: true, unique: false},
  userId: {type: Number, required: true, unique: false},
  userName: {type: String,required: true, unique: false},
  description: {type: String, required: false, unique: false}
  createdAt: {type: Date required: true, unique: false},
  updatedAt: {type: Date required: true, unique: false},
  size: {type: Number, required: true, unique: false},
  watchCount: {type: Number, required: true, unique: false},
  forkCount: {type: Number, required: true, unique: false},
  issueCount: {type: Number, required: true, unique: false},
});

let contributorSchema = mongoose.Schema({
  id: mongoose.ObjectId,
  repoId:  {type: Number, required: true, unique: false},
  repoName: {type: String,required: true, unique: false},
  contributorId: {type: Number, required: true, unique: false},
  contributorName: {type: String,required: true, unique: false},
});

let RepoModel = mongoose.model("Repo", repoSchema);

let ContributorModel = mongoose.model("Repo", contributorSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
};

module.exports.save = save;
