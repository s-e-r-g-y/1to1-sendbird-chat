import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component {
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
    this.props.login(this.state.formValues.userId);
  }

  render() {
    return (
      <form className="form-inline m-top-10" onSubmit={event => (this.handleSubmit(event))}>
        <div className="form-group">
          <label htmlFor="userId">
            <input
              id="userId"
              className="form-control"
              name="userId"
              placeholder="User Id"
              onChange={event => (this.handleChange(event))}
            />
            User Id
          </label>
        </div>
        <button className="btn btn-default m-left-20" name="Login" type="submit">Login</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
