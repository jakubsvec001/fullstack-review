import React from 'react';

const RepoItem = (props) => {
  return (
    <div>
      <hr />
      <span>User Name: {props.userName}</span>{" "}
      <span>Repo Name: <a href={props.repoUrl}>{props.repoName}</a></span>{" "}<span>Created At: {props.createdAt}</span>{" "}
      <span>Last Update: {props.updatedAt}</span>{" "}
      <span>Size: {props.size}</span>{" "}
      <span> Watch Count: {props.watchCount}</span>{" "}
      <span>Issue Count: {props.issueCount}</span>
      <hr />
    </div>
  );
};

export default RepoItem;
