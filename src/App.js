import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I'm a react app </h1>
        <Person name="John" age="25"/>
        <Person name="Smith" age="29">Hobbies: Paint</Person>
        <Person name="John" age="25"/>
      </div>
    );
  }
}

export default App;
