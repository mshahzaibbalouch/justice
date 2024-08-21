

import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';

const rootReducer = combineReducers({
  store: exampleReducer,
});

export default rootReducer;
