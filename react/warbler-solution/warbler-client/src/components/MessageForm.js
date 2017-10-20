import React, {Component} from 'react';

class MessageForm extends Component {
  static defaultProps = {
    onSubmit() {}
  }

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  render() {
    const {message} = this.state;
    const {onSubmit, errorMessage} = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit(message);
        this.setState({message: ''});
      }}>
        {errorMessage ?
            <div className="alert alert-danger">{errorMessage}</div> :
            undefined}
        <textarea
          className="form-control"
          row="3"
          value={message}
          onChange={(e) => this.setState({message: e.target.value})}
        >
        </textarea>
        <button
          type="submit"
          className="btn btn-success pull-right"
          style={{marginTop: '10px'}}
        >
          Add my message!
        </button>
      </form>
    );
  }
}

export default MessageForm;
