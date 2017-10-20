import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actions from '../actions';
import Main from './Main';
import Navbar from '../components/Navbar';

const App = ({
  currentUser,
  authErrorMessage,
  onLogout
}) => (
  <div>
    <Navbar
      currentUser={currentUser}
      profileImageUrl={
        currentUser && currentUser.profileImageUrl ?
          currentUser.profileImageUrl : null
      }
      onLogout={onLogout}
    />
    <Main />
  </div>
);


const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLogout() { dispatch(actions.userLogout()) },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
