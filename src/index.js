import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// importing that component of search bar
import SearchBar from './components/search_bar';

// API key that enable us to make a request to youtube
const API_KEY = 'AIzaSyDlI8WdIrakp2rASGsj7dA7RWgHfg33Ht4';

// whenever the app boots up we get a class of App the constructor will run right away and that will immediately kick off a search with the term surfboards. Then the callback function with data will be called with the list of videos.
// the object that we are passing has a key of videos and the value is videos that is passed as an argument.
// we can condesne this using ES6 when key and variable name are the same we can just use the value name which is videos in this case, for exmaple:
// this.setState({ videos: videos }); is the same as: this.setState({ videos });
// Create a new component. This component should produce some HTML.
class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

// Create a new component. This component should produce some HTML.

ReactDOM.render(<App />, document.querySelector('.container'));




