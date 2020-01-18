const getReposSorted = (sortType = 'createdAt') => {
  const url = 'http://localhost:1128/repos';
  return fetch(url, {
    method: 'GET',
    mode: 'cors',
  });
};

export default getReposSorted;
