import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {},
    };
  }

  handleChange(event) {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendMessage(this.props.channel, this.state.formValues.message);
    this.setState({
      formValues: {},
    });
  }

  render() {
    return (
      <form className="form-inline" onSubmit={event => (this.handleSubmit(event))}>
        <div className="form-group">
          <input
            className="form-control"
            name="message"
            value={this.state.formValues.message || ''}
            placeholder="type message"
            onChange={event => (this.handleChange(event))}
          />
        </div>
        <button name="Send" className="btn btn-default" type="submit">Send</button>
      </form>
    );
  }
}

MessageForm.propTypes = {
  channel: PropTypes.object.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default MessageForm;
