import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

const middlewares = [];

const modifyMiddwares = middlewares => {
  if (process.env.NODE_ENV === 'production') return applyMiddleware(...middlewares);
  const { composeWithDevTools } = require('redux-devtools-extension');
  const { logger } = require('redux-logger');
  middlewares.push(logger);
  return composeWithDevTools(applyMiddleware(...middlewares));
};

const store = createStore(reducer, modifyMiddwares(middlewares));

export default store;
