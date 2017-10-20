import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const activeStyle={display: 'none'};

const Navbar = () => (
  <header>
    <h2><NavLink exact activeStyle={activeStyle} to="/">Home</NavLink></h2>
  </header>
);

export default Navbar;
