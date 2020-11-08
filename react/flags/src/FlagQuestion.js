import React, {Component} from 'react';
import FlagChoices from './FlagChoices'
import FlagAnswer from './FlagAnswer';
import './FlagQuestion.css';

const QuestionStates = {
  QUESTION: 1,
  ANSWER_WRONG: 2,
  ANSWER_CORRECT: 3
};


//What are your dreams? Studying this will get you closer to:
//going out on the weekends and partying
//fucking hot girls
//getting to do work instead of studying all the time 
//having your own apartment, and growing your savings
//moving to Spain
//moving to France. 
//starting your web dev company
//working as a freelanceer making $100k+ a year on the side 
//working on web devlopment stuff you enjoy, where time flies by every day
//being super hyped at work all the time, because you love what youre doing
//going to 10 festivals a year
//being a DJ
//DJing on a party bus.
//living in downtown Austin, in an apartment right next to the clubs. 
//Every day you delay, you're delaying these dreams by one more day.


class FlagQuestion extends Component {
  static defaultProps = {
    //guess options
    options: []
  }

  constructor(props) {
    super(props);
    this.state = {
      userChoice: undefined,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //set which radio selected
  handleChange(e) {
    this.setState({userChoice: Number(e.target.value)});
  }

  //call onGuess and send userChoice as argument. 
  handleSubmit(e) {
    e.preventDefault();
    this.props.onGuess(this.state.userChoice);
  }
  render() {
    const {
      flag,
      questionState,
      //FlagQuestion will be redered inside CountryGame, so it can use Props from CountryGame. Why?
      //We are passing the parent's props (CountryGame's props) to the child, by giving it inline props:
      /*
        <FlagQuestion
          answerText={name}
          onGuess={this.onGuess}
          onNext={this.nextQuestion}
          options={opts}
          questionState={questionState}
          flag={flag}/>
      */
      options,
      answerText,
      onNext
    } = this.props;
    //this.props calls props passed to the component inline, like above. This means that FlagQuestion gets the prop of questionState when FlagQuestion is created. So FlagQuestion is created with those props, then FlagQuestion is mounted by going through the code in FlagQuestion. 
    const {userChoice} = this.state;
    let opts = options.map(opt => ({
      ...opt,
      checked: userChoice === opt.id
    }));
    //below output checks if question was answered. Responds with either FlagChoices or FlagAnswer
    let output = questionState === QuestionStates.QUESTION ?
      (<FlagChoices handleChange={this.handleChange}
                   handleSubmit={this.handleSubmit}
                   options={opts} />) :
      (<FlagAnswer
        correct={questionState === QuestionStates.ANSWER_CORRECT}
        //if the answer is correct, correct is equal to true. This gives the proper html for a correct answer. 
        //if answer incorrect, html for incorrect answer is returned by flaganswer based on correct prop being false. 
        answer={answerText}
        onNext={onNext} />);

    return (
      <div>
        {output}
        <img
           className="flag-img"
           src={flag}
           alt="Guess the flag"
         />
      </div>
    );
  }
}

export default FlagQuestion;
export { QuestionStates };
