import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import ChatWrapper from './ChatWrapper';
import {
  getInitialData,
  signup,
  login,
  logout,
} from '../actions';

class App extends PureComponent {
  constructor(props) {
    super(props);
    props.getInitialData();
  }

  render () {
    const {
      userData,
      userDataLoading,
      signup,
      login,
      logout,
    } = this.props;
    return (
      <div id="container" className="container">
        <Header
          userData={userData}
          userDataLoading={userDataLoading}
          signup={signup}
          login={login}
          logout={logout}
        />
        {userData ? <ChatWrapper /> : <div />}
      </div>
    );
  }
}

App.propTypes = {
  getInitialData: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  userData: PropTypes.object,
  userDataLoading: PropTypes.bool,
};

App.defaultProps = {
  userData: null,
  userDataLoading: false,
};

const mapStateToProps = state => ({
  userData: state.app.userData,
  userDataLoading: state.app.userDataLoading,
});

const mapActionsToProps = {
  getInitialData,
  signup,
  login,
  logout,
};

export default connect(mapStateToProps, mapActionsToProps)(App);
