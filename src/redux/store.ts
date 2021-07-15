import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import appReducer from './reducers';

/**
 * bypassing issue with window global object
 */
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
