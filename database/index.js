const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher');

const repoSchema = mongoose.Schema({
  collectionId: mongoose.Schema.ObjectId,
  repoId: { type: Number, required: true, unique: false },
  repoName: { type: String, required: true, unique: false },
  userId: { type: Number, required: true, unique: false },
  userName: { type: String, required: true, unique: false },
  userUrl: { type: String, required: true, unique: false },
  description: { type: String, required: false, unique: false },
  createdAt: { type: Date, required: true, unique: false },
  updatedAt: { type: Date, required: true, unique: false },
  size: { type: Number, required: true, unique: false },
  watchCount: { type: Number, required: true, unique: false },
  forkCount: { type: Number, required: false, unique: false },
  issueCount: { type: Number, required: true, unique: false }
});

const RepoModel = mongoose.model('RepoModel', repoSchema);

const contributorSchema = mongoose.Schema({
  collectionId: mongoose.Schema.ObjectId,
  repoId: { type: Number, required: true, unique: false },
  repoName: { type: String, required: true, unique: false },
  contributorId: { type: Number, required: true, unique: false },
  contributorName: { type: String, required: true, unique: false }
});

// const ContributorModel = mongoose.model('ContributorModeld', contributorSchema);

const filterRepoData = (repoArray) => {
  const filtered = [];
  repoArray.forEach((repo) => {
    filtered.push({
      repoId: repo.id,
      repoName: repo.name,
      userId: repo.owner.id,
      userName: repo.owner.login,
      userUrl: repo.owner.url,
      description: repo.description,
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
      size: repo.size,
      watchCount: repo.watchers,
      forkCount: repo.fork_count,
      issueCount: repo.open_issues_count
    });
  });
  return filtered;
};

let save = (repoArray) => {
  const filtered = filterRepoData(repoArray);
  filtered.forEach((repo) => {
    // before placing anything into the collection, check if it exists already with .findOne()
    RepoModel.findOne({ repoId: repo.repoId })
      // if already exists, do nothing
      .then((entry) => {
        if (entry === null) {
          // if not exists, save to collection
          console.log(`doesn't exist yet, entering in collection 'repoModels'`);
          RepoModel.create(repo, (err, reply) => {
            if (err) {
              console.log('ERROR inserting new data: ', err);
            } else {
              console.log('SUCCESSFULLY ADDED TO COLLECTION!');
            }
          });
        } else {
          console.log('Entry Already Exits');
        }
      })
      .catch((err) => {
        throw err;
      });
  });
};

const retrieveAllAndSort = (sortMethod, res) => () => {
  if (
    ['createdAt', 'updatedAt', 'size', 'watchCount', 'issueCount'].includes(
      sortMethod
    )
  ) {
    console.log('SORT METHOD: ', sortMethod);
    RepoModel.find({})
      .limit(25)
      .sort({ [sortMethod]: -1 })
      .then((docs) => {
        console.log('Retrieved All Documents');
        console.log('limited, sorted docs: ', docs);
        console.log(typeof JSON.stringify(docs));
        res.send(JSON.stringify(docs));
      })
      .catch((err) => {
        console.log('ERROR in retriveAllAndSort: ', err);
      });
  } else {
    console.log('SORT METHOD NOT YET IMPLEMENTED');
  }
};

module.exports = { save, retrieveAllAndSort };
