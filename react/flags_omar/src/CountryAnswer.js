import React from 'react';
import './CountryAnswer.css';

//Display 'Correct' or 'Incorrect'
function CountryAnswer(props) {
  const {wasCorrect, correctName} = props;
  // const correctName;
  let answer;
  console.log(wasCorrect)
  if (wasCorrect === null) {
    answer = (
      <div className="answer-div">
        <br></br>
      </div>
    );
  } else if (wasCorrect === false) {
    answer = (
      <div className="answer-div">
        <div className="answer-text">Wrong. Correct answer: <strong>{correctName}</strong></div>
        <button className="next">NEXT</button>
      </div>
    )
  } else if (wasCorrect === true) {
    answer = (
      <div className="answer-div">
        <div className="answer-text">Correct! <strong>{correctName}</strong></div>
        <button className="next">NEXT</button>
      </div>
    )
  }
  return(
    <div>
      {answer}
    </div>
  );
}

export default CountryAnswer;

//STOP HERE: next step: make Next button bring up new flag and options.