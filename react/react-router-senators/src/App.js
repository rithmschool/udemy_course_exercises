import React from 'react';
import Main from './Main';
import Navbar from './Navbar';
import './App.css';

const App = ({senators}) => (
  <div className="row">
    <Navbar />
    <section className="container">
      <Main senators={senators}/>
    </section>
  </div>
);

export default App;
