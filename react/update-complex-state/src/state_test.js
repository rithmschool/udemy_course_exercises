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




function removeHobbies(instructorsObj) { 
  let randomIndex = Math.floor(Math.random()*state.instructors.length);
  let y = instructorsObj.map(x => x);
  console.log(y)
  console.log(y[randomIndex].hobbies)
  delete y[randomIndex].hobbies
  return y
}

console.log(removeHobbies(state.instructors))
