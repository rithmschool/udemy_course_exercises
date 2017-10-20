import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({component: Component, componentProps, currentUser, ...rest}) => (
  <Route {...rest} render={props => (
    currentUser ?
      <Component {...props} {...componentProps} currentUser={currentUser} /> :
      <Redirect to={{
        pathname: '/signin',
        state: { from: props.location }
      }}/>
  )}/>
);

export default PrivateRoute;
