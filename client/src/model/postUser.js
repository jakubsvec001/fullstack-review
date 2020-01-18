const postUser = ( userName, sortType = "createdAt" ) => {
  const url = "http://localhost:1128/repos";
  return fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({userName, sortType})
  });
};

export default postUser;
