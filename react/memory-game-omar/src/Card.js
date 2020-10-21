import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
  static defaultProps ={
    cardColor: 'grey',
    numberClicks(){},
  }
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
        className={
          isActive ? this.props.cardClass : "card"
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