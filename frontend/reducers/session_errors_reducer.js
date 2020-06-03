import {RECEIVE_SESSION_ERRORS} from '../actions/session_actions';

const ErrorsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        default:
            return oldState
    }
}

export default ErrorsReducer;