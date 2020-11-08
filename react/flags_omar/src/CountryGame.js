import React, {Component} from 'react';
import CountryOptions from './CountryOptions';
import {shuffle} from './Shuffle';
import './CountryGame.css'

class CountryGame extends Component {
  constructor(props){
    super(props);
    this.state = {
      countries: [],
      options: [],
      correctAns: undefined,
      flag: '',
      correctName: undefined,
      loading: <div>Loading...</div>
    }
    this._options = this._options.bind(this);
    this.onNext = this.onNext.bind(this);
  } 
  componentDidMount(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(resp => resp.json())
    .then(countries => {
      const correctAns = Math.floor(Math.random()*countries.length);
      const options = this._options(countries, correctAns);
      const flag = countries[correctAns].flag;
      const correctName = countries[correctAns].name;
      this.setState({countries, options, flag, correctName, loading:null})
    })
  }
  _options(countries, correctAns){
    let randCountry;
    const options = [correctAns];
    //STOP HERE: are we somehow pulling state info from _options??? now says flag is not defined.
    let _loopOptions = () => { //check if randCountry already in options:
      for (let i = 0; i < options.length; i++){ //loop through options
        //check if an option is the same as randCountry
        while (randCountry === options[i] || randCountry === correctAns){
          randCountry = Math.floor(Math.random()*countries.length); //create new random number
          _loopOptions();  //recheck all options if a new option is set, because we don't know if the new option is the same as one of the previous options.
        }
      }
    }
    for (let i = 0; i < 4; i++) { //create 5 options 
      randCountry = Math.floor(Math.random()*countries.length); //create new random number
      _loopOptions() //check if randCountry is already in options
      options.push(randCountry);
    }
    return shuffle(options);
  }
  onNext(countries){
    //why is countries undefined?
    
    const correctAns = Math.floor(Math.random()*countries.length);
    const {correctAns} = this.state;
    const options = this._options(countries, correctAns);
    const flag = countries[correctAns].flag;
    const correctName = countries[correctAns].name;
    this.setState({options, flag, correctName, loading:null, correctAns})
  }
  render(){
    console.log('state', this.state)
    //maybe state does not load until end of document? 
    const {flag, loading, correctAns, countries} = this.state;
    const _options = this._options;
    const onNext = this.onNext;
    //add four options to render. 
    //use a new component to add options to render. 
    return(
      <main>
        {/* show 4 options */}
        <div>{loading}</div>
        <CountryOptions 
          options = {this.state.options}
          countries = {this.state.countries}
          correctAns = {this.state.correctAns}
          correctName = {this.state.correctName}
          optionsFunc = {_options}
        />
        <button 
        // make options and flag correspond on next
        //make it so you dont need to press next twice
          className="next btn btn-primary"
          onClick={() => {onNext(countries)}}
        >NEXT</button>
        {/* Show flag image */}
        <img className='flag' alt='flag' src={flag} style={correctAns === 156 ? {border:'0px solid black'} : {border:'1px solid black'}}/>
      </main>
    );
  }
}

export default CountryGame;