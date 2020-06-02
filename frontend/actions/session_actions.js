import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const signup = user => dispatch => (
    SessionUtil.signup(user)
    .then(userser => dispatch(receiveCurrentUser(user)))
)
// Not sure if this takes in a user 

export const login = user => dispatch => (
    SessionUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
)

export const logout = () => dispatch => (
    SessionUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
)



