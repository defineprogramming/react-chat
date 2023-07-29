import React, { Component } from 'react';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({ message: '' });
  }

  render() {
    return (
      <form id="chat-message" onSubmit={this.handleSubmit}>
        <input id="message-input" type="text" value={this.state.message} onChange={this.handleChange} />
        <input id="send-button" type="submit" value="Send" />
      </form>
    );
  }
}

export default MessageForm;