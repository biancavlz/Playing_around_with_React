import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "john", age: "25" },
      { name: "Smith", age: "29"  },
      { name: "jane", age: "25" }
    ]
  }

  switchNameHandle = () => {
    this.setState(
      {
        persons: [
          { name: "Johnyyyyyy", age: "25" },
          { name: "Smith", age: "29"  },
          { name: "jane", age: "30" }
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>I'm a react app </h1>
        <button onClick={ this.switchNameHandle }>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Paint</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
