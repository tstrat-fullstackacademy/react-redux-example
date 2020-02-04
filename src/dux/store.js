import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import reducer from './reducer';

let store = createStore(reducer, applyMiddleware(reduxLogger));

export default store;
