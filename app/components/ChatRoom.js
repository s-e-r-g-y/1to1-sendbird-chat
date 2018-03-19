import React from 'react';
import PropTypes from 'prop-types';
import MessageForm from './MessageForm';
import Message from './Message';

const ChatRoom = ({ createdChannel, sendMessage }) => {
  if (!createdChannel.userId) {
    return (<div />);
  }

  return (
    <div className="chat-room-wp left m-left-20">
      <h4>Chat room with {createdChannel.nickname}[{createdChannel.userId}]</h4>
      <div className="chat-box">
        {createdChannel.messages.map(message => (
          <Message key={message.messageId} message={message} />
        ))}
      </div>
      <div>
        <MessageForm
          channel={createdChannel}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

ChatRoom.propTypes = {
  createdChannel: PropTypes.object.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default ChatRoom;
