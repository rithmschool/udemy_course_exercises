import './App.css';
import React, { Component } from 'react';
import Card from './Card';


//make a counter that checks how many cards have been clicked. When two cards have been clicked, reset to grey cards. 
//make a boolean that checks if the cards should be counted for the counter. If they have already been matched, you can click them without resettiing to grey. 

const colors = ['red', 'red', 'blue', 'blue', 'green', 'green', 'orange', 'orange', 'pink', 'pink', 'purple', 'purple', 'magenta', 'magenta'];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
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
      cardsClicked: 1,
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
          changeColor={() => {
            this.setState({});
          }}
          checkTotalClicks={() => {
            console.log('checking');
            if (this.state.cardsClicked  === 2) {
              this.setState({totalClicks: 2}, () => { console.log(this.state)})
            }
          }}
          numberClicks={() => {
            if (this.state.cardsClicked === 2) {
              this.setState({cardsClicked: 1},
              () => {console.log(this.state.cardsClicked)});  
            } else if (this.state.cardsClicked < 2) {
              this.setState({
                cardsClicked: this.state.cardsClicked + 1
              })
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
