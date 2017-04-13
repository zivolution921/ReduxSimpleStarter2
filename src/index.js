import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// importing that component of search bar
import SearchBar from './components/search_bar';

// API key that enable us to make a request to youtube
const API_KEY = 'AIzaSyDlI8WdIrakp2rASGsj7dA7RWgHfg33Ht4';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

// Create a new component. This component should produce some HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Create a new component. This component should produce some HTML.

ReactDOM.render(<App />, document.querySelector('.container'));




