import {RECEIVE_SESSION_ERRORS} from '../actions/session_actions';
import {merge} from 'lodash';

const ErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return merge({}, oldState, action.errors)
        default:
            return oldState
    }
}

export default ErrorsReducer;