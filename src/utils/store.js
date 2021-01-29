import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import catReducer from './reducers/catReducer';

const store = createStore(catReducer, applyMiddleware(logger, thunk));
export default store;