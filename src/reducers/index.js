import {combineReducers} from 'redux';
// Reducers
import treeReducer from './treeReducer';

//Combining Reducers
export default combineReducers({
	tree: treeReducer
});