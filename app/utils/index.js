import SendBird from 'sendbird';
import { APP_ID } from '../constants';

const sb = new SendBird({
  appId: APP_ID,
});

const subscribeOnMessageReceive = (callback) => {
  const channelHandler = new sb.ChannelHandler();
  channelHandler.onMessageReceived = (channel, message) => {
    callback(channel, message);
  };

  sb.addChannelHandler(APP_ID, channelHandler);
};

window.sb = sb;

const getStorageItem = (alias) => {
  return window.localStorage.getItem(alias);
};

const setStorageItem = (alias, item) => {
  return window.localStorage.setItem(alias, item);
};

const removeStorageItem = (alias) => {
  return window.localStorage.removeItem(alias);
};

export {
  sb,
  subscribeOnMessageReceive,
  getStorageItem,
  setStorageItem,
  removeStorageItem,
};
