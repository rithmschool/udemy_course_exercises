import React, {Component} from 'react';
import CountryAnswer from './CountryAnswer';
import './CountryOptions.css';

//create a state to show if:
// 1. No answer has been selected
// 2. Answer has been selected, but not submitted
// 3. Answer has been submitted


//why do we want three different states?
//we want to show a submit button that you can't press in state 1
//we want to show a submit button that can be proessed in state 2
//we want to show a message in state 3

//where are these states going to be used?
//state 1 and 2 are going to be used in CountryOptions component, to show the submit button
//state 3 is going to be used in CountryAnswer, to show answer. 

//three states:
//no answer
//correct answer
//wrong answer 

class CountryOptions extends Component {
  constructor(props){
    super(props);
    this.optionsHtml = this.optionsHtml.bind(this);
    this.state = {
      selected: null,
      wasCorrect: null
    }
    this.onSelect = this.onSelect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSelect(e){
    this.setState({selected: Number(e.target.value)});
  }
  onSubmit(e){
    if (this.state.wasCorrect !== null) {return};
    if (this.state.selected === this.props.correctAns) {
      this.setState({wasCorrect: true}, () => {console.log(this.state.wasCorrect)})
    } else {
      this.setState({wasCorrect: false}, () => {console.log(this.state.wasCorrect)})
    }
  }
  optionsHtml(){
    let optionsArr = [];
    const {options, countries} = this.props;
    const onSelect = this.onSelect;
    //get countries from CountryGame
    for (let i = 0; i < options.length; i++) {
      optionsArr.push(
        <label key={options[i]}>
          <input 
            name="countries" 
            type="radio" 
            id={options[i]} 
            value={options[i]} 
            onClick={onSelect}
          />
          {countries[options[i]].name}
        </label>
      )
    }
    return(optionsArr);
  }
  render(){
    const {selected, wasCorrect} = this.state;
    //get options from CountryGame 
    //pass options into CountryOptions as prop
    //create a function to return HTML for options
    const optionsHtml = this.optionsHtml;
    const onSubmit = this.onSubmit;
    return(
      <div>
        <form>
            {optionsHtml()}
        </form>
        {/* remove submit after submit */}
        <button 
          className='submit'
          style={{visibility: selected ? 'visible' : 'hidden'}}
          onClick={onSubmit}
        >
          Submit
        </button>
        {/* STOP HERE: Next step is to check if the correct answer was selected, when we press the Submit button. */}
        {/* Check if this.state.selected === this.props.correctAns */}
        <CountryAnswer 
          wasCorrect={wasCorrect} 
          correctAns={this.props.correctAns}
          correctName={this.props.correctName}
        />
        {/* Return Answer based on wasCorrect.
          if wasCorrect is true, return 'correct'
          if wasCorrect is false, return 'incorrect'
          if wasCorrect is null, return null. 
        */}

      </div>
    );
  }
}

export default CountryOptions;