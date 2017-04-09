import React, { Component } from 'react';

// define a new class called search bar and give it access to all its functionalities that react component class
class SearchBar extends Component {
  // initializing state in a class component
  // all javascript classes have a constructor
  // constructor is the first function called automatically whenever new instance of class is created
  // the constructor help us to initialize variables and state
  constructor(props) {
    // calling parent method on parent class by calling super
    super(props);
    // initializing the state by creating a new object and assigning it to this.state.
    // the object contains the property term on state that will be recorded the change to be the value of the input
    this.state = { term: '' };

  }
  // render method
  render() {
    // event handler that will be trigered whenever the event will occur which is the change event in the input
    return <input onChange={event => console.log(event.target.value)} />;
  }

  
}


//any file that import search bar will get that component.
export default SearchBar;