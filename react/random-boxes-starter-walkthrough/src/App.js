import React, { Component } from 'react';
import './App.css';

const NUM_BOXES = 32; 

//create stateless functional component for boxes 
const Box = ({color}) => {
  const style = {
    backgroundColor: color,
    height: '180px',
    width: '180px',
    display: 'inline-block'
  }
  return <div style={style}></div>
}


class App extends Component {
  constructor(props) {
    super(props);
    //create a variable boxColors that has 32 different colors 
    //draw 32 random colors from allColors
    
    //create an empty array with NUM_BOXES length
    const boxColors = Array(NUM_BOXES).fill().map(this.getRandomColor, this);
    this.state = {boxColors};
    setInterval(() => {
      //create a new boxColors array, and change one of the colors
      const boxColors = this.state.boxColors.slice();
      console.log(boxColors);
      //pick one random color from allColors 
      const randBoxColIndx = Math.floor(
        Math.random()*boxColors.length
      );
      boxColors.splice(randBoxColIndx, 1, this.getRandomColor())
      this.setState(
        {boxColors}
      );
    }, 300);
  }

  getRandomColor() {
    const randAllColIndex = Math.floor(
      Math.random()*this.props.allColors.length
    );
    const randomAllColor = this.props.allColors[randAllColIndex]
    return randomAllColor;
  }

  render() {
    const boxes = this.state.boxColors.map((color, index) => (
      <Box key={index} color={color} />
    )); 
    console.log(boxes);
    return(
      <div className="App">
        {boxes}
      </div>
    )
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





