import React, { Component } from 'react';

// define a new class called search bar and give it access to all its functionalities that react component class
class SearchBar extends Component {
  // render method
  render() {
    // event handler that will be trigered whenever the event will occur which is the change event in the input
    return <input onChange={event => console.log(event.target.value)} />;
  }

  
}


//any file that import search bar will get that component.
export default SearchBar;