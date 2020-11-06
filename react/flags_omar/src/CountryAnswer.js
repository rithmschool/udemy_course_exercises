import React from 'react';
import './CountryAnswer.css';

//Display 'Correct' or 'Incorrect'
function CountryAnswer(props) {

  const {wasCorrect, correctName, optionsFunc} = props;
  // const correctName;
  let answer; 
  console.log(wasCorrect)
  if (wasCorrect === null) {
    answer=(
      <div className="answer-div">
        <br></br>
      </div>
    );
  } else {
    answer = (
      <div className="answer-div">
        <div className="answer-text">
          {wasCorrect ? 
            <span><span className="text-success">Correct! </span><strong>{correctName}</strong></span> : 

            <span><span className="text-danger">Wrong. </span>Correct answer: <strong>{correctName}</strong></span>        
          }
        </div>
        <button 
          className="next btn btn-primary"
          onClick={() => {
            console.log(optionsFunc)
            // optionsFunc()
          }}
        >
          NEXT
        </button>
      </div>
    )
  }
  return(
    <div className="country-answer">
      {answer}
    </div>
  );
}

export default CountryAnswer;

//STOP HERE: next step: make Next button bring up new flag and options.