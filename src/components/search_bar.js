import React, { Component } from 'react';

// define a new class called search bar and give it access to all its functionalities that react component class
class SearchBar extends Component {

  constructor(props) {
    super(props);
    
    this.state = { term: '' };

  }
  

  render() {
    return (
      <div>
      // the input is controlled component or controlled form element.
      <input
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value })} />
      
      </div>
      );
    }
  }


//any file that import search bar will get that component.
export default SearchBar;