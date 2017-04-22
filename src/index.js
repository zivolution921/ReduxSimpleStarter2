import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

// importing that component of search bar
import SearchBar from './components/search_bar';

// API key that enable us to make a request to youtube
const API_KEY = 'AIzaSyDlI8WdIrakp2rASGsj7dA7RWgHfg33Ht4';

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
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

// Create a new component. This component should produce some HTML.

ReactDOM.render(<App />, document.querySelector('.container'));




