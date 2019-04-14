import { combineReducers } from 'redux';
import { counterReducer as counter } from './count';

export default combineReducers({
  counter
});
