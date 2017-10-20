import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SenatorList from './SenatorList';
import SenatorDetails from './SenatorDetails';

const Main = ({senators}) => (
  <Switch>
    <Route exact path="/" render={(props) => (
      <SenatorList {...props} senators={senators} />
    )}/>
    <Route path="/:cspanid" render={(props) => (
      <SenatorDetails {...props} senators={senators} />
    )}/>
  </Switch>
);

export default Main;
