import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions'


const SessionReducer = (oldState = {id: null} , action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({} , oldState);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id }
        case LOGOUT_CURRENT_USER:
            nextState.id = null;
            return nextState;
        case RECEIVE_SESSION_ERRORS:
            return action.errors
        default:
            return oldState;
    }
}

export default SessionReducer;