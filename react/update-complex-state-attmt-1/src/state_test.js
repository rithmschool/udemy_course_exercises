state = {
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

const instructors = state.instructors.slice()
instructors[3].hobbies.splice(0, 2)
console.log(instructors);
console.log(state.instructors)

