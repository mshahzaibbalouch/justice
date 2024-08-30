import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import ourServicesReducer from './services';

const rootReducer = combineReducers({
  store: exampleReducer,
  services: ourServicesReducer,
});

export default rootReducer;