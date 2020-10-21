import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
  static defaultProps ={
    cardColor: 'grey',
    numberClicks(){},
  }
  //try creating an array with colors, and assigning from there? 
  constructor(props){
    super(props);
    this.state = {
      isActive: true,
      isClicked: false,
      totalClicks: 0
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.boolClicked = this.boolClicked.bind(this);
  }
  handleToggle () {
    this.setState({isActive: !this.state.isActive});
  };
  boolClicked() {
    if (this.state.isClicked === false) {
      this.setState({isClicked: true})
    } else {
      this.setState({isClicked: false})   
    }
  }
  render() {
    const isActive = this.state.isActive;
    const handleToggle = this.handleToggle;
    const numberClicks = this.props.numberClicks;
    const boolClicked = this.boolClicked;
    return(
      <div 
      //create a function in className to be called on parent
        /*
        className={
          isActive ? "card card-hidden": "card"
        }
        */

        className={
          isActive ? this.props.cardClass : "card"
          //need to activate hide in this child component, when the cardsClicked in parent is 2. 
          //create a function in onClick, to check if cardsClicked=2.
        }

        onClick={() => {
          if (this.state.isClicked === false) {
            boolClicked();
            handleToggle();
            numberClicks();
          }
        }} 
        style={{backgroundColor: this.props.cardColor}}
      />
    );
  }
}

export default Card;