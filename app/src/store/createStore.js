import { applyMiddleware, createStore } from 'redux';

import reducers from '../client/reducers';
import thunk from 'redux-thunk';

export default (preloadedState = {}) => {
  const store = createStore(reducers, preloadedState, applyMiddleware(thunk));
  return store;
};
