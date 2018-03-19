import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SignupForm extends Component {
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
    this.props.signup(this.state.formValues.nickname, this.state.formValues.userId);
  }

  render() {
    return (
      <form className="m-top-10" onSubmit={event => (this.handleSubmit(event))}>
        <div className="form-group">
          <label htmlFor="nickname">
            <input
              id="nickname"
              className="form-control"
              name="nickname"
              placeholder="Nickname"
              onChange={event => (this.handleChange(event))}
            />
            Nickname
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="userId-signup">
            <input
              id="userId-signup"
              className="form-control"
              name="UserId"
              placeholder="User Id"
              onChange={event => (this.handleChange(event))}
            />
            User Id
          </label>
        </div>
        <button className="btn btn-default" name="Signup" type="submit">SignUp</button>
      </form>
    );
  }
}

SignupForm.propTypes = {
  signup: PropTypes.func.isRequired,
};

export default SignupForm;
