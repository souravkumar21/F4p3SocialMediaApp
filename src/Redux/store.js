// store.js
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './Reducers/reducer';

// const rootreducer = combineReducers({rootReducer});   // this line will be used when there multiple reducers.

// Create the Redux store with reducers and middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
