import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './users/userReducers';

const rootReducer = combineReducers({
  users: userReducer,
});

const generateStore = () => {
  const middlewareEnhancer = applyMiddleware(thunk);
  const store = createStore(rootReducer, middlewareEnhancer);

  return store;
};

export default generateStore;
