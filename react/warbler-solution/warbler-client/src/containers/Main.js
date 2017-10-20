import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';
import * as actions from '../actions';
import AuthForm from '../components/AuthForm';
import PrivateRoute from '../components/PrivateRoute';
import MessageForm from '../components/MessageForm';
import Homepage from '../components/Homepage';

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  componentDidMount() {
    this.props.loadMessages();
  }

  handleNewMessage(text) {
    const {newMessage, history} = this.props;
    newMessage(text).then(() => {
      history.push('/');
    });
  }

  render() {
    const {
      currentUser,
      authErrorMessage,
      handleSignIn,
      handleSignUp,
      messages,
      history
    } = this.props;
    return (
      <div className="container">
        <Switch>
          <Route exact path='/signin' render={(props) => (
            <AuthForm
              signIn={true}
              heading={"Welcome Back."}
              buttonText={"Log in"}
              onAuth={(authInfo) => handleSignIn(authInfo).then(() => history.push('/')) }
              errorMessage={authErrorMessage}
              {...props}
            />
          )} />
          <Route exact path='/signup' render={(props) => (
            <AuthForm
              signIn={false}
              heading={"Join Warbler today."}
              buttonText={"Sign me up!"}
              onAuth={(authInfo) => handleSignUp(authInfo).then(() => history.push('/'))}
              errorMessage={authErrorMessage}
              {...props}
            />
          )} />
          <PrivateRoute
            path='/users/:id/messages/new'
            currentUser={currentUser}
            component={MessageForm}
            componentProps={{onSubmit: this.handleNewMessage}}
          />
          <Route
            exact path='/'
            render={(props) => (
              <Homepage
                {...props}
                currentUser={currentUser}
                messages={messages}/>
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  messages: state.messages,
  errorMessage: state.errorMessage
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSignIn(authData) { return dispatch(actions.signIn(authData)); },
  handleSignUp(authData) { return dispatch(actions.signUp(authData)); },
  loadMessages() { return dispatch(actions.fetchMessages()); },
  newMessage(text) {
    return dispatch(actions.postNewMessage(text));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
