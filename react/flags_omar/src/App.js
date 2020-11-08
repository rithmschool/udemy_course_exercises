import React, {Component} from 'react'; 
import CountryGame from './CountryGame'

class App extends Component {
  
  //What do we need to do? 
  //add countrygame component 
  render(){
    return(
      //add header 
      <div>
        <CountryGame />
      </div>
    )
  }
}

export default App;