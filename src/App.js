import React, { Component } from 'react';
import cssClasses from'./App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let persons = null;
    let btnClass = "";
    
    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
              return <ErrorBoundary key={person.id}>
                <Person
                  click={ () => this.deletePersonHandler(index) }
                  name={person.name} 
                  age={person.age}
                  changed={ (event) => this.nameChangeHandler(event, person.id) }
                />
              </ErrorBoundary>
            })
          }
        </div>
      );

      btnClass = cssClasses.Red;
    }

    const classes = [];

    if (this.state.persons.length <= 2){
      classes.push(cssClasses.red);
    }

    if (this.state.persons.length <= 1) {
      classes.push(cssClasses.bold)
    }

    return (
        <div className={cssClasses.App}>
          <h1>I'm a react app </h1>
          <p className={classes.join(" ")}>This is really working</p>
          <button className={btnClass} onClick={ this.togglePersonsHandler }>Toggle persons</button>
          { persons }
        </div>
    );
  }
}

export default App;
