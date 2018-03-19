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

// export const injectReducer = (store, { key, reducer }) => {
//   if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;
//
//   store.asyncReducers[key] = reducer;
//   store.replaceReducer(makeRootReducer(store.asyncReducers));
// };

export default {
  makeRootReducer,
};
