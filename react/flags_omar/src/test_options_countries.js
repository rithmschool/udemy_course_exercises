let _options = () => {
  const correctAns = Math.floor(Math.random()*this.state.countries.length);
  let j = 0, randCountry;
  const options = [correctAns];
  let _loopOptions = () => { //check if randCountry already in options:
    for (let i = 0; i < options.length; i++){ //loop through options
      //check if an option is the same as randCountry
      while (randCountry === options[i] || randCountry === correctAns){
        randCountry = Math.floor(Math.random()*this.state.countries.length); //create new random number
        _loopOptions();  //recheck all options if a new option is set, because we don't know if the new option is the same as one of the previous options.
      }
    }
  }
  for (let i = 0; i < 4; i++) { //create 5 options 
    randCountry = Math.floor(Math.random()*this.state.countries.length); //create new random number
    _loopOptions() //check if randCountry is already in options
    options.push(randCountry);
  }
  console.log(options);
}

_options();