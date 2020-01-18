import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import postUser from './model/postUser';

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

  search(term) {
    console.log(`${term} was searched`);
    console.log(`sortMethod = ${this.state.sortType}`);
    postUser(term, this.state.sortType)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    postUser('', 'updatedAt')
      .then((response) => response.json())
      .then((data) => console.log('DATA DID MOUNT: ', data))
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos} />
        <Search onSearch={this.search.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
