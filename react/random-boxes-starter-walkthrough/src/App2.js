




import React, { Component } from 'react';
import './App.css';

const NUM_BOXES = 32; 

//const Box below is a stateless functional component. It's used in render()
//STOP HERE. Continue with doing a walkthrough of this code, then try to recreate it yourself, especially focusing on mastering stateless functional components, and bulding the App constructor, with all the methods, constructors, setState, and setInterval in the right places. 
//Is it necessary to master where all of these things are going to go, or should I just keep going with the tutorials, since I should learn these things from repetition eventually anyway?
//Ill go through it once more. 
const Box = ({color}) => {
  const style = {
    width: '180px',
    height: '180px',
    display: 'inline-block',
    backgroundColor: color
  }
  return <div style={style} />;
};

class App extends Component { //class created
  constructor(props) { //constructor created
    super(props); //super called to get props from Component, and to use this keyword
    const boxes = Array(NUM_BOXES).fill().map(this.getRandomColor, this); //const inside constructor
    this.state = {boxes}; //state inside constructor

    setInterval(() => { //setInterval inside constructor
      const randomBoxIndex = Math.floor(
        Math.random()*NUM_BOXES
      );
      const boxes = this.state.boxes.slice();
      boxes[randomBoxIndex] = this.getRandomColor();
      this.setState({boxes}, () => {
      });
    }, 300);
  }
  
  getRandomColor() {  //getRandomColor() method outside constructor
    const randIndex = Math.floor(Math.random()*this.props.allColors.length);
    const randColor = this.props.allColors[randIndex];
    return randColor; 
  }

  render() { //render() method outside constructor
    const boxes = this.state.boxes.map((color, index) => (
      //color param is just currentValue in map
      //index is index in map
      <Box key={index} color={color} />
    ));
    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}


App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
};

export default App;
