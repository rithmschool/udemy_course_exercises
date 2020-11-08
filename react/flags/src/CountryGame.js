import React, {Component} from 'react';
//import QuestionStates, a variable from the file FlagQuestion.js
//why is QuestionStates a variable, and not state?
//maybe because state is harder or impossible to import 

import FlagQuestion, {QuestionStates} from './FlagQuestion.js';
import shuffle from 'shuffle-array';

class CountryGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      //what is options for?
      //options is array for different guesses
      options: [],
      correctOption: undefined,
      questionState: undefined,
    }

    this.onGuess = this.onGuess.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(resp => resp.json())
      .then(countries => {
        //correct option set
        const correctOption = Math.floor(Math.random() * countries.length);
        //shuffle 4 options
        const options = this._getOptions(correctOption, countries);
        this.setState({
          countries,
          correctOption,
          options,
          questionState: QuestionStates.QUESTION,
          //questionState is set with QuestionStates from FlagQuestion.js. 
        });
      })
      .catch(console.warn)
  }

  //onGuess is called in FlagQuestion, when the submit button is pressed. 
  onGuess(answer) {
    const {correctOption} = this.state;
    //check if correct option was chosen 
    let questionState = answer === correctOption ?
                        QuestionStates.ANSWER_CORRECT :
                        QuestionStates.ANSWER_WRONG;
    //set a new value for questionState
    //i believe, based on the value of QuestionState, the CorrectAnswer, WrongAnswer, or Question component will show.
    this.setState({questionState});
  }

  nextQuestion() {
    const {countries} = this.state; //use same countries from first fetch 
    const correctOption = Math.floor(Math.random() * countries.length); //reset correct 
    const options = this._getOptions(correctOption, countries); //generate options
    this.setState({
      correctOption,
      options,
      questionState: QuestionStates.QUESTION
    });
  }

  _getOptions(correctOption, countries) {
    //create array with correct option first
    let options = [correctOption];
    let tries = 0;
    while (options.length < 4 && tries < 15) {
      let option = Math.floor(Math.random() * countries.length);
      //checks if option has been used already
      if (options.indexOf(option) === -1 ) {
        options.push(option);
      } else {
        //what is the point of 'tries'? 
        tries++;
      }
    }
    return shuffle(options);
  }

  render() {
    let {
      countries,
      correctOption,
      options,
      questionState
    } = this.state;
    let output = <div>Loading...</div>;
    //once api returns fetch and updates state  
    if (correctOption !== undefined) {
      const {flag, name} = countries[correctOption];
      let opts = options.map(opt => {
        //map each option onto an object with an id an name 
        return {
          id: opt,
          name: countries[opt].name
        };
      });
      output = ( //is this a function? no... it's just a react output, with a component and props. 
      //output is declared above. Here we're simply redefining it. 
        <FlagQuestion
          answerText={name}
          onGuess={this.onGuess}
          onNext={this.nextQuestion}
          options={opts}
          questionState={questionState}
          flag={flag}/>
      );
    }
    return (
      <div style={{marginTop: '15px'}}>
        {output}
      </div>
    );
  }
}

export default CountryGame;
