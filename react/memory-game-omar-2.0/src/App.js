import './App.css';
import React, { Component } from 'react';
import Card from './Card';

const colors = ['red', 'red', 'blue', 'blue', 'green', 'green', 'orange', 'orange', 'pink', 'pink', 'purple', 'purple', 'magenta', 'magenta'];

class App extends Component {
  static defaultProps = {
  };
  constructor(props) {
    super(props);
    this.state = { 
      card: [
        {
          id: 0,
          hidden: true,
          color: 'red'
        },
        {
          id: 1,
          hidden: true,
          color: 'red'
        },
        {
          id: 2,
          hidden: true,
          color: 'orange'
        },
        {
          id: 3,
          hidden: true,
          color: 'orange'
        },
        {
          id: 4,
          hidden: true,
          color: 'yellow'
        },
        {
          id: 5,
          hidden: true,
          color: 'yellow'
        },
      ],
      numberClicks: 0,
      isShuffled: false, 
      message: ""
    }
    this.clickCounter = this.clickCounter.bind(this);
    this.resetCards = this.resetCards.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.numberClicks = this.numberClicks.bind(this);
    this.listAsShown = this.listAsShown.bind(this);
  }
  listAsShown(){
    //list the current card as shown.
    //loop through cards, find the current one with id.

    //copy the array of state..........
    const cards = this.state.card.map(x => x);
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === this.props.listId) {
        //copy chosen card
        const card = cards[i];
        //change 'hidden' of chosen card, from 'cards'
        card.hidden = false;
        //insert modified card back into 'cards'
        cards[i] = card;
        this.setState({card}, () => {console.log(this.state)})
      }
    }
  }
  numberClicks(){
    //count how many clicks

    //only count a click, if the card is not shown.

    const {numberClicks} = this.state;

    if (numberClicks < 2) {
      this.setState({numberClicks: numberClicks + 1}, () => {console.log(this.state.numberClicks)});
    } else {
      //hide cards again 

      hideCards();

      this.setState({numberClicks: 1}, () => {console.log(this.state.numberClicks)});
    }
  }
  hideCards() {
    //change state in child...
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
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.setState({isShuffled: true}, () => {console.log('isshuf')})
    return array;
  }
  callbackFunction = (childData) => {
    //we want to see if child is shown, so that if we click it twice, it doesnt get counted twice. 
    this.setState({message: childData})
  }
  render () {
    const resetCards = this.resetCards;
    const numberClicks = this.numberClicks;
    const listAsShown = this.listAsShown;
    const cards = this.state.card.map((c, index) => (
      <Card 
        key={c.id} 
        color={c.color}
        listId={c.id}
        resetCards={resetCards}
        numberClicks={numberClicks}
        listAsShown={listAsShown}
        parentCallback={this.callbackFunction}
      />
    ));
    const shuffle = this.shuffle;
    return(
      <div>
        {this.state.isShuffled ? shuffle(cards) : cards}
        <p>{this.state.message}</p>
      </div>
    );
  };
}

export default App;
