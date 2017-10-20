import {combineReducers} from 'redux';
import currentUser, {getCurrentUser} from './currentUser';
import messages from './messages';

export {getCurrentUser};

const rootReducer = combineReducers({
  currentUser,
  messages,
});

export default rootReducer;
