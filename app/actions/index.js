import { createAction } from 'redux-actions';
import {
  sb,
  getStorageItem,
} from '../utils';
import { USER_ITEM_ALIAS } from '../constants';

export const userDataLoading = createAction('user data loading', () => ({
  meta: 'ajax',
}));

export const initialDataLoaded = createAction('initial data loaded', user => ({
  user,
  meta: 'ajax',
}));

export const getInitialData = () => {
  return (dispatch) => {
    const userId = getStorageItem(USER_ITEM_ALIAS);
    if (userId) {
      dispatch(userDataLoading());
      return sb.connect(userId, (user) => {
        dispatch(initialDataLoaded(user));
      });
    }
    return dispatch(initialDataLoaded(null));
  };
};

export const signedUp = createAction('signed up', (user, nickname) => ({
  user,
  nickname,
  meta: 'ajax',
}));

export const signup = (nickname, userId) => {
  return (dispatch) => {
    dispatch(userDataLoading());
    return sb.connect(userId, (user) => {
      sb.updateCurrentUserInfo(nickname);
      dispatch(signedUp(user, nickname));
    });
  };
};

export const loggedIn = createAction('logged in', user => ({
  user,
  meta: 'ajax',
}));

export const login = (userId) => {
  return (dispatch) => {
    dispatch(userDataLoading());
    return sb.connect(userId, (user) => {
      dispatch(loggedIn(user));
    });
  };
};

export const loggedOut = createAction('logged out', () => ({
  meta: 'ajax',
}));

export const logout = () => {
  return (dispatch) => {
    dispatch(userDataLoading());
    return sb.disconnect(() => {
      dispatch(loggedOut());
    });
  };
};

export const userListLoaded = createAction('user list loaded', userList => ({
  userList,
  meta: 'ajax',
}));

export const getUserList = () => {
  return (dispatch) => {
    return sb.createUserListQuery().next((userList) => {
      dispatch(userListLoaded(userList));
    });
  };
};

export const channelCreated = createAction('channel created', channel => ({
  channel,
  meta: 'ajax',
}));

export const selectUser = (userId, nickname) => {
  return (dispatch) => {
    return sb.GroupChannel.createChannelWithUserIds([userId], true, (createdChannel) => {
      dispatch(channelCreated({
        url: createdChannel.url,
        name: createdChannel.name,
        nickname,
        userId,
      }));
    });
  };
};

export const messageSent = createAction('message sent', message => ({
  message,
  meta: 'ajax',
}));

export const sendMessage = (createdChannel, messageStr) => {
  return (dispatch) => {
    return sb.GroupChannel.getChannel(createdChannel.url, (channel) => {
      channel.sendUserMessage(messageStr, (message) => {
        dispatch(messageSent(message));
      });
    });
  };
};

export const messageAdded = createAction('message added', (channel, message) => ({
  channel,
  message,
  meta: 'ajax',
}));

export const addMessage = (channel, message) => {
  return (dispatch) => {
    dispatch(messageAdded(channel, message));
  };
};
