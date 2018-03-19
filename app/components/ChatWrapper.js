import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserList from './UserList';
import ChatRoom from './ChatRoom';
import { subscribeOnMessageReceive } from '../utils';
import { getUserList, selectUser, sendMessage, addMessage } from '../actions';

class ChatWrapper extends Component {
  constructor(props) {
    super(props);
    if (props.userData) {
      props.getUserList();

      subscribeOnMessageReceive((channel, message) => {
        props.addMessage(channel, message);
      });
    }
  }

  render () {
    const {
      userList,
      createdChannel,
      selectUser,
      sendMessage,
    } = this.props;

    return (
      <div>
        <UserList
          userList={userList}
          activeUserId={createdChannel.userId}
          selectUser={selectUser}
        />
        <ChatRoom
          createdChannel={createdChannel}
          sendMessage={sendMessage}
        />
      </div>
    );
  }
}

ChatWrapper.propTypes = {
  userData: PropTypes.object.isRequired,
  userList: PropTypes.array,
  createdChannel: PropTypes.object,
  getUserList: PropTypes.func.isRequired,
  selectUser: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired,
};

ChatWrapper.defaultProps = {
  userList: [],
  createdChannel: {},
};

const mapStateToProps = state => ({
  userData: state.app.userData,
  userList: state.app.userList,
  createdChannel: state.app.createdChannel,
});

const mapActionsToProps = {
  getUserList,
  selectUser,
  sendMessage,
  addMessage,
};

export default connect(mapStateToProps, mapActionsToProps)(ChatWrapper);
