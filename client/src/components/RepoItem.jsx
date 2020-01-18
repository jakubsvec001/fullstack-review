import React from "react";

const RepoItem = (props) => {
  return (
    <div>
      <p><span>User Name: {props.userName}</span> <span>Repo Name: {props.repoName}</span><span>Created At: {props.createdAt}</span><span>Last Update: {props.updatedAt}</span> <span>Size: {props.size}</span> <span> Watch Count: {props.watchCount}</span> <span>Issue Count: {props.issueCount}</span></p>
    </div>
  )
}

export default RepoItem;