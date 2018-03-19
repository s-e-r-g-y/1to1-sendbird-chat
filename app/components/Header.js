import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import Title from './Title';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabId: undefined,
      tabs: [
        { name: 'SignUp', component: <SignupForm signup={props.signup} /> },
        { name: 'Login', component: <LoginForm login={props.login} /> },
      ],
    };
  }

  selectTab(tab) {
    this.setState({
      activeTabId: this.state.activeTabId === tab ? undefined : tab,
    });
  }

  render () {
    const {
      userData,
      userDataLoading,
    } = this.props;

    if (userDataLoading) {
      return (
        <div className="header">
          <Title />
          <Loading />
        </div>
      );
    }

    const {
      tabs,
      activeTabId,
    } = this.state;
    const activeTab = tabs.filter(item => (item.name === activeTabId))[0];

    return (
      <div className="header">
        <Title />
        {userData === null
          ?
            <div>
              {tabs.map((tab, index) => (
                <button
                  key={tab.name}
                  className="btn btn-default m-left-20"
                  tabIndex={index}
                  onClick={() => {
                    this.selectTab(tab.name);
                  }}
                >
                  {tab.name}
                </button>
              ))}
              {!activeTab || activeTab.component}
            </div>
          :
            <div className="f-size-18">
              You logged in as <span className="t-bold">{userData.nickname || userData.userId}</span>
              <button
                className="btn btn-default m-left-20"
                onClick={() => {
                  this.setState({ activeTabId: undefined });
                  this.props.logout();
                }}
              >
                Logout
              </button>
            </div>
        }
      </div>
    );
  }
}

Header.propTypes = {
  userData: PropTypes.object,
  userDataLoading: PropTypes.bool,
  signup: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  userData: null,
  userDataLoading: false,
};

export default Header;
