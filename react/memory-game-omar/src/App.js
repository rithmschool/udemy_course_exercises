import './App.css';
import React, { Component } from 'react';
import Card from './Card';

const colors = ['red', 'red', 'blue', 'blue', 'green', 'green', 'orange', 'orange', 'pink', 'pink', 'purple', 'purple', 'magenta', 'magenta'];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const randColors = shuffle(colors);

class App extends Component {
  static defaultProps = {
    colors: [...randColors]
  };
  constructor(props) {
    super(props);
    this.state = { 
      cardsClicked: 0,
      cardClass: "card card-hidden"
    }
  }
  spawnCards () {
    const NUM_CARDS = 14;
    let CardsArr = [];
    for (let i = 0; i < NUM_CARDS; i++) {
      CardsArr.push(
        <Card 
          cardClass={this.state.cardClass}
          key={i} 
          cardColor={this.props.colors[i]} 
          numberClicks={() => {
            if (this.state.cardsClicked === 2) {
              this.setState({cardsClicked: 1},
              () => {console.log(this.state.cardsClicked)});  
            } else if (this.state.cardsClicked < 2) {
              this.setState({
                cardsClicked: this.state.cardsClicked + 1
              }, () => {console.log(this.state.cardsClicked)})
            };
          }}
        />
      )
    }
    return(CardsArr);
  }
  render () {
    return(
      <div>
        {this.spawnCards()}
      </div>
    );
  };
}

export default App;
