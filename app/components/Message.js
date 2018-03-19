import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => {
  const date = new Date(message.createdAt);
  const hours = (`0${date.getHours()}`).slice(-2);
  const minutes = (`0${date.getMinutes()}`).slice(-2);
  const seconds = (`0${date.getSeconds()}`).slice(-2);
  const float = message.myMessage ? 'right' : 'left';
  const margin = !message.myMessage ? 'right' : 'left';
  return (
    <div className={`message m-${margin}-20`}>
      <div className={float}>
        {`${hours}:${minutes}:${seconds}`} {message.message}
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Message;
