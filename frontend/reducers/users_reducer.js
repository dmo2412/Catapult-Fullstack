import {RECEIVE_USERS, RECEIVE_USER} from '../actions/user_actions';
import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/session_actions'; 
import {merge} from 'lodash';

const UsersReducer = (oldState = {} , action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({} , oldState);

    switch(action.type) {
        case RECEIVE_USERS:
            return action.users;
        case RECEIVE_USER: 
            nextState[action.user.id] = action.user 
            return nextState;
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser;
            return nextState;
        case RECEIVE_SESSION_ERRORS:
            return merge(nextState, action.errors)
        default:
            return oldState;
    }
}

export default UsersReducer;