import React from 'react';
import StyledButton from './StyledButton';
import './FlagChoices.css';

//FlagChoices is a stateless functional component
//does passing 'props' as an argument give all props? --yes 
const FlagChoices =  props => {
  let options = props.options || []  //options is set to be either props.options or a blank array.
  //why would a blank array be set? 

  const {handleChange, handleSubmit} = props;
  //why are handleChange and handleSubmit not declared here? 
  //maybe because we want to set FlagQuestions state of userChoice. Why do we want to do this? 
  // Maybe we can't use userChoice if the state was in FlagChoices... Where is userChoice used? 
  //usercHoice is sent to handleSubmit, and from there is sent to onGuess 

  let inputs = options.map(opt => (
    //create an element for each option
    <label key={opt.id}>
      <input type="radio"
             value={opt.id}
             checked={opt.checked}
             onChange={handleChange}
             name="flag-choice" />
      {opt.name}
    </label>
  ));

  return (
    <form className="flag-form" onSubmit={handleSubmit}>
      {inputs}
      <StyledButton text="GUESS" type="submit"/>
    </form>
  );
}

export default FlagChoices;
