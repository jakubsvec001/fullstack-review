import React from 'react';
import RepoItem from './RepoItem.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <RepoItem
      userName={'Jake Wija'}
      repoName={'some repo'}
      createdAt={'05/3/14'}
      updatedAt={'06/03/22'}
      size={23456}
      watchCount={2}
      issueCount={4}
    />
  </div>
);

export default RepoList;
