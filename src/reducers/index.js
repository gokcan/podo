import { combineReducers } from 'redux';
import templateReducer from './templateReducer';

// Root Reducer
const rootReducer = combineReducers({
  template: templateReducer,
});

export default rootReducer;
