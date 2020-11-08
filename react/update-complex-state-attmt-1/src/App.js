import React, { Component } from 'react';
import './App.css';
let randomIndex;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
    
    setTimeout(() => {
      function removeHobbies(instructorsObj) { 
        randomIndex = Math.floor(Math.random()*instructorsObj.length);
        let y = instructorsObj.map(x => x);
        console.log(y)
        console.log(y[randomIndex].hobbies)
        delete y[randomIndex].hobbies
        return y
      }

      this.setState(
        {...removeHobbies(this.state.instructors)}
      );
    }, 1000);
  }

  render() {
    
    const instructors = this.state.instructors.map((instructor, index) => {
      if (index === randomIndex) {
        return(
          <li key={index}>
            <h3>{instructor.name}</h3>
            <h4>Hobbies: {instructor.hobbies}</h4>
          </li>
        );
      }
      else {
        return(
          <li key={index}>
            <h3>{instructor.name}</h3>
            <h4>Hobbies: {instructor.hobbies.join(', ')}</h4>
          </li>
        );
      } 
    });

    console.log('testing')
    console.log(this.state.instructors);
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
