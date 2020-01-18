import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import postUser from './model/postUser';
import getReposSorted from './model/getReposSorted';
// sort by methods
// createdAt
// updatedAt
// size
// watchCount
// issueCount

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      sortType: 'issueCount'
    };
  }

  componentDidMount() {
    getReposSorted('updatedAt')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ repos: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  search(term) {
    postUser(term, this.state.sortType)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ repos: data });
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <Search onSearch={this.search.bind(this)} />
        <RepoList repos={this.state.repos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
