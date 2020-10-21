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
      isActive: true,
      totalClicks: 0
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle () {
    this.setState({isActive: !this.state.isActive});
  };
  render() {
    const isActive = this.state.isActive;
    const handleToggle = this.handleToggle;
    const numberClicks = this.props.numberClicks;
    const changeBool = this.props.changeBool;
    const resetCards = this.props.resetCards;
    return(
      <div 
        className={
          this.props.cardClass
        }
        onClick={() => {
            handleToggle();
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