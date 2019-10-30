import { combineReducers } from 'redux';

//User
import user from './user/reducer';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
