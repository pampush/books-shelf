import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from './reducers/books';

/**
 * bypassing issue with window global object
 */
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
