const request = require('request');
const config = require('../config.js');
const save = require('../database/index').save;

let getReposByUsername = (userName, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  const options = {
    url: 'https://api.github.com/users/' + userName + '/repos',
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${config.TOKEN}`
    }
  };

  let cb = (err, response, body) => {
    console.log('REQUESTING FROM GITHUB...');
    if (err) {
      console.log('ERROR in github.js', err);
    } else {
      const repos = JSON.parse(body);
      if (repos.message === 'Not Found') {
        // console.log('getReposByUserName request cound not find user: ', repos);
      } else {
        save(repos, callback);
      }
    }
  };

  request(options, cb);
};

// use request module to fetch from url and options

module.exports = { getReposByUsername };
