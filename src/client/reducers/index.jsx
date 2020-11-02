import { combineReducers } from 'redux';
import globalReducer from './global-reducer';
import accountReducer from './account-reducer';
import requestStatusReducer from './request-status-reducer';

const RootReducer = combineReducers({
  global: globalReducer,
  account: accountReducer,
  requestStatus: requestStatusReducer,
});

export default RootReducer;
