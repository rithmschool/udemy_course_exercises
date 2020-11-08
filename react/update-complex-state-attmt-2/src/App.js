import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';  

class InstructorItem extends Component {
  static propTypes = {
    name: PropTypes.string, 
    hobbies: PropTypes.arrayOf(PropTypes.string)
  }
  render() {
    return (
      <li>
        <h3>{this.props.name}</h3>
        <h4>
          Hobbies: {this.props.hobbies.join(', ')}
        </h4>
      </li>
    )
  }
}

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
      const instructors = this.state.instructors.map((inst, i) => {
        if (randomInst === i) {
          const hobbies = [...inst.hobbies];
          hobbies.splice(randomHobby, 1);
          return {
            ...inst,
            hobbies
          }
        } else {
          return inst;
        }
      })
      // const instructors = this.state.instructors.slice();
      // instructors[randomInst] = Object.assign({}, instructors[randomInst])
      // instructors[randomInst].hobbies = instructors[randomInst].hobbies.slice()
      // instructors[randomInst].hobbies.splice(randomHobby, 1)
      
      console.log('edited')
      console.log(instructors)
      console.log('original')
      console.log(this.state.instructors)
      this.setState({instructors})
    }, 1000);
  }

  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <InstructorItem 
        key={index} 
        name = {instructor.name}
        hobbies ={instructor.hobbies}
      />
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
