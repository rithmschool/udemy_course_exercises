import React, {Component} from 'react';
import './AuthForm.css';

class AuthForm extends Component {
  static defaultProps = {
    onAuth() {},
    heading: "Welcome back.",
    buttonText: "Log in",
    signIn: true,
    errorMessage: undefined
  }

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      profileImageUrl: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAuth(this.state);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const {email, username, password, profileImageUrl} = this.state;
    const {signIn, heading, buttonText, errorMessage} = this.props;
    if (signIn) {
      return (
        <div className="col-sm-4 col-sm-offset-4">
          <form onSubmit={this.handleSubmit}>
            <h2>{heading}</h2>
            {errorMessage ?
               <div className="alert alert-danger">{errorMessage}</div> :
               undefined}
            <label htmlFor="signin-email">E-mail</label>
            <input
              id="signin-email"
              type="text"
              name="email"
              className="form-control"
              autoComplete="off"
              value={email}
              onChange={this.handleChange}/>
            <label htmlFor="signin-password">Password</label>
            <input
              id="signin-password"
              type="password"
              name="password"
              className="form-control"
              autoComplete="off"
              value={password}
              onChange={this.handleChange}/>
            <button type="submit" className="btn btn-default">{buttonText}</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="col-sm-4 col-sm-offset-4">
          <form onSubmit={this.handleSubmit}>
            <h2>{heading}</h2>
            {errorMessage ?
               <div className="alert alert-danger">{errorMessage}</div> :
               undefined}
            <label htmlFor="signup-email">E-mail</label>
            <input
              id="signup-email"
              type="text"
              name="email"
              className="form-control"
              autoComplete="off"
              value={email}
              onChange={this.handleChange}/>
            <label htmlFor="signup-username">Username</label>
            <input
              id="signup-username"
              type="text"
              name="username"
              className="form-control"
              autoComplete="off"
              value={username}
              onChange={this.handleChange}/>
            <label htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              type="password"
              name="password"
              className="form-control"
              autoComplete="off"
              value={password}
              onChange={this.handleChange}/>
            <label htmlFor="signup-image-url">Image URL</label>
            <input
              id="signup-image-url"
              type="text"
              name="profileImageUrl"
              className="form-control"
              autoComplete="off"
              value={profileImageUrl}
              onChange={this.handleChange}/>
            <button type="submit" className="btn btn-default">Sign me up!</button>
          </form>
        </div>
      );
    }
  }
}

export default AuthForm;
