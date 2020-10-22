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
      cardClassHidden: "card card-hidden",
      cardClassShown: "card",
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
      cardA: -1,
      cardB: -1
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
    console.log(this.state.cardsClicked);
    if (this.state.cardsClicked === 2) {
      setTimeout(() => {
        //STOP HERE: Cards now stay when they match colors, but if you click more, or even match another colored pair, all turns grey. It seems that maybe card1 and card2 are holding values when they shouldnt be. Maybe we can add state to keep track of cards that have been matched. 
        let chosenColorsArr = [];
        let chosenColorsNums= [];
        let chosenColors = {};
        let card1;
        let card2;
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

          if (chosenColorsArr[0] === chosenColorsArr[1]){
            const card1 = `card${chosenColorsNums[0]}`;
            const card2 = `card${chosenColorsNums[1]}`;
            this.setState({[card1]: -1, [card2]: -1}, ()=>{console.log(this.state)})
            //if the colors match, set their boolean to -1.
          }

          const card = `card${i}`;
          console.log(`State of ${card} is ${this.state[card]}`)
          if (this.state[card] !== -1 && this.state[card] !== true) {
            console.log(`changing ${card} to 'true'`)
            this.setState({[card]: true});
          }

        }
      }, 1000)
    }
  }
  spawnCards () {
    const NUM_CARDS = 14;
    const clickCounter = this.clickCounter;
    const resetCards = this.resetCards;
    let CardsArr = [];
    for (let i = 0; i < NUM_CARDS; i++) {
      const card = `card${i}`;
      if (this.state[card]) {
        CardsArr.push(
          <Card 
            cardClass={this.state.cardClassHidden}
            key={i} 
            listId={i}
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
      } else if (this.state[card] === false || this.state[card] === -1){
        CardsArr.push(
          <Card 
            cardClass={this.state.cardClassShown}
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
