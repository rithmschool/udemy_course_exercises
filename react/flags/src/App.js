import React, { Component } from 'react';
import CountryGame from './CountryGame';
import worldImg from './world.jpg';
import './App.css';

//only header and countrygame in this component. Why not put header into countrygame? 
//maybe becuase it's just a different peice of the site. 
class App extends Component {
  render() {
    return (
      <div className="flag-app">
        <header
          className="title-header"
          style={{ backgroundImage: `url(${worldImg})` }}>
          <h1 className="title-text">Guess The Flag</h1>
        </header>
        <CountryGame />
      </div>
    );
  }
}

export default App;
