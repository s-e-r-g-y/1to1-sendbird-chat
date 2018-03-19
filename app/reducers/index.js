import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import app from './app';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    ...asyncReducers,
    routing,
    app,
  });
};

export default {
  makeRootReducer,
};
