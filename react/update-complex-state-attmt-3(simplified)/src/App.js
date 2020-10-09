import React, { Component } from 'react';
import './App.css';

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
      var randomInst = Math.floor(
        Math.random()*this.state.instructors.length
      )
      const randomHobby = Math.floor(
        Math.random()*this.state.instructors[randomInst].hobbies.length
      )
      console.log(randomHobby)
      const instructors = this.state.instructors.slice();
      instructors[randomInst] = Object.assign({}, instructors[randomInst])
      instructors[randomInst].hobbies = instructors[randomInst].hobbies.slice()
      instructors[randomInst].hobbies.splice(randomHobby, 1)
      
      console.log('edited')
      console.log(instructors)
      console.log('original')
      console.log(this.state.instructors)
      this.setState({instructors})
    }, 1000);
  }

  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(', ')}</h4>
      </li>
    ))

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
