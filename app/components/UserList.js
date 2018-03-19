import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const UserList = ({ userList, activeUserId, selectUser }) => {
  return (
    <div className="user-list-wp left m-left-20">
      <h4>User List</h4>
      <ul>
        {userList.map(user => (
          <User
            key={user.userId}
            activeUserId={activeUserId}
            user={user}
            selectUser={selectUser}
          />
        ))}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  userList: PropTypes.array.isRequired,
  selectUser: PropTypes.func.isRequired,
  activeUserId: PropTypes.string,
};

UserList.defaultProps = {
  activeUserId: '',
};

export default UserList;
