
import { handleActions } from 'redux-actions';
import { USER_ITEM_ALIAS } from '../constants';
import {
  setStorageItem,
  removeStorageItem,
} from '../utils';

const initialState = {
  userData: undefined,
  userDataLoading: false,
};

export default handleActions(
  {
    'user data loading': (state) => {
      return {
        ...state,
        userDataLoading: true,
      };
    },

    'initial data loaded': (state, action) => {
      return {
        ...state,
        userData: action.payload.user,
        userDataLoading: false,
      };
    },

    'signed up': (state, action) => {
      const userData = {
        ...action.payload.user,
        nickname: action.payload.nickname,
      };
      setStorageItem(USER_ITEM_ALIAS, userData.userId);
      return {
        ...state,
        userData,
        userDataLoading: false,
      };
    },

    'logged in': (state, action) => {
      setStorageItem(USER_ITEM_ALIAS, action.payload.user.userId);
      return {
        ...state,
        userData: action.payload.user,
        userDataLoading: false,
      };
    },

    'logged out': (state) => {
      removeStorageItem(USER_ITEM_ALIAS);
      return {
        ...state,
        userData: null,
        userDataLoading: false,
      };
    },

    'user list loaded': (state, action) => {
      return {
        ...state,
        userList: [...action.payload.userList],
      };
    },

    'channel created': (state, action) => {
      return {
        ...state,
        createdChannel: {
          ...action.payload.channel,
          messages: [],
        },
      };
    },

    'message sent': (state, action) => {
      const message = {
        ...action.payload.message,
        myMessage: true,
      };
      return {
        ...state,
        createdChannel: {
          ...state.createdChannel,
          messages: [...state.createdChannel.messages, message],
        },
      };
    },

    'message added': (state, action) => {
      const message = {
        ...action.payload.message,
        myMessage: false,
      };
      return {
        ...state,
        createdChannel: {
          ...state.createdChannel,
          messages: [...state.createdChannel.messages, message],
        },
      };
    },
  },
  initialState,
);
