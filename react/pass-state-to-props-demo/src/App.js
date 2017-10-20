import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const InstructorItem = props => {
  return (
    <li>
      <h3>{props.name}</h3>
      <h4>
      Hobbies: {props.hobbies.join(", ")}
      </h4>
    </li>
  );
}

InstructorItem.propTypes = {
  name: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string)
};


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
      const randInst = Math.floor(
        Math.random() *
        this.state.instructors.length
      );
      
      const hobbyIndex = Math.floor(
        Math.random() *
        this.state.instructors[randInst].length
      );
      
      const instructors = this.state.instructors.map((inst, i) => {
        if (i === randInst) {
          const hobbies = [...inst.hobbies];
          hobbies.splice(hobbyIndex, 1);
          return {
            ...inst,
            hobbies
          };
        }
        
        return inst;
      });
      this.setState({instructors});
    }, 5000);
  }
  
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <InstructorItem
        key={index}
        name={instructor.name}
        hobbies={instructor.hobbies}
      />
    ));
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
