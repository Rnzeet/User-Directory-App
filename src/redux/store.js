
import { legacy_createStore as createStore ,applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'
import {thunk} from 'redux-thunk';
import usersReducer from './reducer/usersReducer'; 
const logger = createLogger();
const rootReducer = combineReducers({
  users: usersReducer,

});


const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);
// const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
