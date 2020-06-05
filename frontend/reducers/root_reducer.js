import {combineReducers} from 'redux';
import session from './session_reducer';
import errors from './session_errors_reducer';
// import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
    session,
    errors
})

export default RootReducer;