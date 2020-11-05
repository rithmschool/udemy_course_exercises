import React, {Component} from 'react';
import './CountryOptions.css';
//create four options, with the options from CountryGame
class CountryOptions extends Component {
  constructor(props){
    super(props);
    this.optionsHtml = this.optionsHtml.bind(this);
  }
  optionsHtml(){
    let optionsArr = [];
    const {options, countries} = this.props;
    //get countries from CountryGame
    for (let i = 0; i < options.length; i++) {
      optionsArr.push(
        <label key={options[i]}>
          <input type="radio" id={options[i]} />
          {countries[options[i]].name}
        </label>
      )
    }
    return(optionsArr);
  }
  render(){
    //get options from CountryGame 
    //pass options into CountryOptions as prop
    //create a function to return HTML for options
    const optionsHtml = this.optionsHtml;
    return(
      <div>
        <label>
          {optionsHtml()}
        </label>
      </div>
    );
  }
}

export default CountryOptions;