import * as SessionAPIUtil from '../util/session_api_util'; 

// Constants
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"; 
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"; 
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"; 


// Actions
const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
const logoutCurrentUser = () => ({
  type: RECEIVE_CURRENT_USER,
  user
});
const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS, 
  errors
}); 


// Action creators
export const login = (user) => dispatch => (
  SessionAPIUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveSessionErrors(err.responseJSON))
  )
); 
export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveSessionErrors(err.responseJSON))
  )
); 
export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(
    user => dispatch(logoutCurrentUser()),
    err => dispatch(receiveSessionErrors(err.responseJSON))
  )
); 