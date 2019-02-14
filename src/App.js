import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: "sdf", name: "john", age: "25" },
      { id: "sdfw", name: "Smith", age: "29"  },
      { id: "sdfs", name: "jane", age: "25" }
    ],

    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]}; //same as: const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); //Delete an element by 1
    this.setState({persons: persons});
  }

  render() {
    const styling = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
              return <Person
                  click={ () => this.deletePersonHandler(index) }
                  name={person.name} 
                  age={person.age}
                  key={person.id}
                  changed={ (event) => this.nameChangeHandler(event, person.id)}
                />
            })
          }
        </div>
      );

      styling.backgroundColor = "red";
      styling[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      }
    }

    const classes = [];

    if (this.state.persons.length <= 2){
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold")
    }

    return (
      <div className="App">
        <h1>I'm a react app </h1>
        <p className={classes.join(" ")}>This is really working</p>
        <button style= {styling} onClick={ this.togglePersonsHandler }>Toggle persons</button>
        { persons }
      </div>
    );
  }
}

export default Radium(App);
