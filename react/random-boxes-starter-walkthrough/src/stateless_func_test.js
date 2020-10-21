
//stateless functional component only implements the render() method, so there's no constructor, and no state.

import React from 'react';

//stateless functional component:
const Greeting = props => ( //define with const
  //props for parameters
  <h1>Hello, {props.name}</h1>
);

//Regular component: 
class RecipeApp extends Component { //class is declared 
  render() { //render is called inside component 
    return ( //HTML is returned from render()
      <div className="App">
        <Recipe
          title="pasta"
          ingredients={['flour', 'water']}
          instructions="Mix ingredients"
          img="spaghetti.jpg"
          />
      </div>
    );
  }
}


//regular component from RandomBoxes:
class App extends Component { //class is declared
  constructor(props) {//constructor is created
    super(props); //super props retrieves props from parent constructor (Component)
    const boxes = Array(NUM_BOXES).fill().map(this.getRandomColor, this);
    //boxes var is created inside constructor. Var is used for this.state. If we can declare a variable inside the constructor, and we are going to only use it here, then it makes the most sense to declare it here.
    //STOP HERE: Walking through the different parts of a regular React Component. Pretty much done with regular component walthrough. Next step is to compare regular component to stateless functional component.
    this.state = {boxes};

    setInterval(() => {
      const randomBoxIndex = Math.floor(
        Math.random()*NUM_BOXES
      );
      const boxes = this.state.boxes.slice();
      boxes[randomBoxIndex] = this.getRandomColor();
      this.setState({boxes}, () => {
      });
    }, 300);
  }
  
  getRandomColor() {  
    //create a variable for a random number of allColors index length.
    const randIndex = Math.floor(Math.random()*this.props.allColors.length);
    //pull a random color from this.props.allColors
    const randColor = this.props.allColors[randIndex];
    return randColor; 
  }

  render() {
    const boxes = this.state.boxes.map((color, index) => (
      <Box key={index} color={color} />
    ));
    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}


export default Greeting;
