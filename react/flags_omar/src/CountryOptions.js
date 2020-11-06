import React, {Component} from 'react';
import CountryAnswer from './CountryAnswer';
import './CountryOptions.css';
import Button from 'react-bootstrap/Button';

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
    const {wasCorrect} = this.state;
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
            disabled={wasCorrect === null ? false : true}
          />
          {countries[options[i]].name}
        </label>
      )
    }
    return(optionsArr);
  }
  render(){
    const {selected, wasCorrect} = this.state;
    const {correctAns, correctName, optionsFunc} = this.props;
    console.log('optionsFunc: ',optionsFunc);
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
          className='submit btn btn-success'
          style={{visibility: selected ? 'visible' : 'hidden'}}
          onClick={onSubmit}
          disabled={wasCorrect === null?false:true}
        >
          Submit
        </button>
        {/* STOP HERE: Next step is to check if the correct answer was selected, when we press the Submit button. */}
        {/* Check if this.state.selected === this.props.correctAns */}
        <CountryAnswer 
          wasCorrect={wasCorrect} 
          correctAns={correctAns}
          correctName={correctName}
          optionsFunc={optionsFunc}
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