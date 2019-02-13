import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "john", age: "25" },
      { name: "Smith", age: "29"  },
      { name: "jane", age: "25" }
    ],

    showPersons: false
  }

  switchNameHandle = (newName) => {
    this.setState(
      {
        persons: [
          { name: newName, age: "25" },
          { name: "Smith", age: "29"  },
          { name: "jane", age: "30" }
        ]
      }
    )
  }

  nameChangeHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: "Max", age: "25" },
          { name: event.target.value, age: "29"  },
          { name: "jane", age: "30" }
        ]
      }
    )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const styling = {
      backgroundColor: "white", 
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map(person => {
              return <Person name={person.name} age={person.age}/>
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>I'm a react app </h1>
        <button style= {styling} onClick={ this.togglePersonsHandler }>Toggle persons</button>
        { persons }
      </div>
    );
  }
}

export default App;
