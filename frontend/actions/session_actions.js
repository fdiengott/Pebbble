import * as SessionAPIUtil from '../util/session_api_util'; 

// Constants
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"; 
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"; 
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"; 
export const CLEAR_ERRORS = "CLEAR_ERRORS"; 


// Actions
const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});
const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS, 
  errors
}); 
const clearSessionErrors = () => ({
  type: CLEAR_ERRORS, 
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
export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(
    () => dispatch(logoutCurrentUser()),
    err => dispatch(receiveSessionErrors(err.responseJSON))
  )
}; 

export const clearErrors = () => dispatch => dispatch(clearSessionErrors()); 