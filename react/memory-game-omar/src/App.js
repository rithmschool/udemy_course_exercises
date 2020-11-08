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
      cardsClicked: 1,
      card0: true,
      card1: true,
      card2: true,
      card3: true,
      card4: true,
      card5: true,
      card6: true,
      card7: true,
      card8: true,
      card9: true,
      card10: true,
      card11: true,
      card12: true,
      card13: true,
    }
    this.clickCounter = this.clickCounter.bind(this);
    this.resetCards = this.resetCards.bind(this);
  }
  clickCounter() {
    if (this.state.cardsClicked === 2) {
      this.setState({cardsClicked: 1});  
    } else if (this.state.cardsClicked < 2) {
      this.setState({
        cardsClicked: this.state.cardsClicked + 1
      })
    }
  }
  resetCards(){
    if (this.state.cardsClicked === 2) {
      setTimeout(() => {
        let chosenColorsArr = [];
        let chosenColorsNums= [];
        let chosenColors = {};
        for (let i=0; i<this.props.colors.length; i++){
          const card = `card${i}`;
          if (this.state[card] === false) {
            chosenColors[card] = i;
            chosenColorsArr.push(this.props.colors[i])
            chosenColorsNums.push(i);
          }
        }
        console.log(chosenColors);
        console.log(chosenColorsArr);
        console.log(chosenColorsNums);
        for (let i=0; i<this.props.colors.length; i++) {

          //if colors match, set boolean to -1
          if (chosenColorsArr[0] === chosenColorsArr[1]){
            const card1 = `card${chosenColorsNums[0]}`;
            const card2 = `card${chosenColorsNums[1]}`;
            this.setState({[card1]: -1, [card2]: -1})
          }

          //hide card again
          //set all card states equal to true.
          const card = `card${i}`;
          console.log(`State of ${card} is ${this.state[card]}`)
          if (this.state[card] !== -1 && this.state[card] !== true) {
            console.log(`changing ${card} to 'true'`)
            this.setState({[card]: true});
          }
        }
        console.log(this.state);
      }, 1000)
    }
  }
  spawnCards () {
    const NUM_CARDS = 14;
    const clickCounter = this.clickCounter;
    const resetCards = this.resetCards;
    let CardsArr = [];
    //Create 14 cards:
    for (let i = 0; i < NUM_CARDS; i++) {
      const card = `card${i}`;
      //if the card${i} in state has a value of 'true', load the card, but make it hidden 
      if (this.state[card] === true) {
        CardsArr.push(
          <Card 
            cardClass={"card card-hidden"}
            key={i} 
            cardColor={this.props.colors[i]} 
            numberClicks={clickCounter}
            changeBool={() => {
              resetCards();
              if (this.state[card] !== -1){
                console.log(`changing ${card} to 'false'`)
                this.setState({[card]: false});
              }
            }}
            resetCards={()=> {
            }}
          />
        )
      //if the card${i} in state has a value of 'false', or -1, load the card, but make it shown
      //where is the statement that reloads all the cards to true? 
      } else {
        CardsArr.push(
          <Card 
            cardClass={"card"}
            key={i} 
            cardColor={this.props.colors[i]} 
            numberClicks={clickCounter}
          />
        )
      } 
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
