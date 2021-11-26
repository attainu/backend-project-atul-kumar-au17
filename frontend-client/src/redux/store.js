
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers'
import reduxLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myStore = createStore(allReducers, /* preloadedState, */ composeEnhancers(applyMiddleware(reduxLogger, thunkMiddleware)));


export default myStore
