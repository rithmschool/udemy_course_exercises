import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
  static defaultProps ={
    numberClicks(){},
    resetCards(){},
    listAsShown(){}
  }
  state = {
    isShown: false
  }
  constructor(props){
    super(props);
    this.showCard = this.showCard.bind(this);
    this.sendData = this.sendData.bind(this);
  }
  sendData = () => {
    const isShown = this.state.isShown;
    this.props.parentCallback(isShown);
  }
  showCard(){
    //change state of card 
    this.setState({isShown: true});
  }
  render() {
    const numberClicks = this.props.numberClicks;
    const resetCards = this.props.resetCards;
    const showCard = this.showCard;
    const listAsShown = this.props.listAsShown;
    const sendData = this.sendData;
    return(
      <div 
        //how to set background color with state?
        className={this.state.isShown ? "card" : "card card-hidden"}
        onClick={() => {
            numberClicks();
            showCard();
            resetCards();
            sendData();
        }} 
        style={{backgroundColor: this.props.color}}
      />
    );
  }
}

export default Card;