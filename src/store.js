import {createStore, applyMiddleware} from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const middleWare = applyMiddleware(logger, thunk)
// Creating Store.
const store = createStore(reducer, middleWare);

export default store;