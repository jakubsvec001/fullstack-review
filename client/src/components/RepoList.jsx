import React from 'react';
import RepoItem from './RepoItem.jsx';

const RepoList = (props) => {
  return (
    <div>
      <h4> Repo List Component </h4>
      There are {props.repos.length} repos.
      {props.repos.map((repo, i) => {
        return (
          <RepoItem
            key={i}
            userName={repo.userName}
            repoName={repo.repoName}
            repoUrl={repo.repoUrl}
            createdAt={repo.createdAt}
            updatedAt={repo.updatedAt}
            size={repo.size}
            watchCount={repo.watchCount}
            issueCount={repo.issueCount}
          />
        );
      })}
    </div>
  );
};

export default RepoList;
