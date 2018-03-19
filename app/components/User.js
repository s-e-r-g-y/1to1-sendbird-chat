import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user, activeUserId, selectUser }) => {
  const isActive = (activeUserId === user.userId ? 't-bold' : '');

  return (
    <li>
      <button type="button" className={`btn btn-link ${isActive}`} onClick={() => { selectUser(user.userId, user.nickname); }}>
        {user.nickname || user.userId}
      </button>
    </li>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  activeUserId: PropTypes.string.isRequired,
  selectUser: PropTypes.func.isRequired,
};

export default User;
