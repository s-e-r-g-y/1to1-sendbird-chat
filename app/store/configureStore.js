import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { makeRootReducer } from '../reducers';

export default function configureStore(preloadedState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    makeRootReducer(),
    preloadedState,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
  );

  store.asyncReducers = {};

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const reducers = require('../reducers').default;
      store.replaceReducer(reducers(store.asyncReducers));
    });
  }

  return store;
}
