import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
  static defaultProps ={
    cardColor: 'grey',
    numberClicks(){},
    changeBool(){},
    resetCards(){}
  }
  constructor(props){
    super(props);
    this.state = {
      totalClicks: 0
    };
  }
  render() {
    const numberClicks = this.props.numberClicks;
    const changeBool = this.props.changeBool;
    const resetCards = this.props.resetCards;
    return(
      <div 
        className={
          this.props.cardClass
        }
        onClick={() => {
            numberClicks();
            changeBool();
            resetCards();
        }} 
        style={{backgroundColor: this.props.cardColor}}
      />
    );
  }
}

export default Card;