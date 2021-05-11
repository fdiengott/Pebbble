import * as UserAPIUtil from '../util/user_api_util'; 

export const RECEIVE_USERS = "RECEIVE_USERS"; 
export const RECEIVE_USER = "RECEIVE_USER"; 
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS"; 

const receiveUsers = (users) => ({
  type: RECEIVE_USERS, 
  users
}); 

const receiveUser = (user) => ({
  type: RECEIVE_USER, 
  user
}); 

const receiveUserErrors = (error) => ({
  type: RECEIVE_USER_ERRORS, 
  error
}); 

export const fetchUsers = () => dispatch => (
  UserAPIUtil.fetchUsers().then(
    users => dispatch(receiveUsers(users))
  )
); 
export const fetchUser = (userId) => dispatch => (
  UserAPIUtil.fetchUser(userId).then(
    user => dispatch(receiveUser(user)),
    err => dispatch(receiveUserErrors(err)) // handle errors? 
  )
); 

export const updateUser = (user) => dispatch => (
  UserAPIUtil.updateUser(user).then(
    newUser => dispatch(receiveUser(newUser)),
    err => dispatch(receiveUserErrors(err))
  )
); 

window.fetchUsers = fetchUsers; 
window.fetchUser = fetchUser; 
window.updateUser = updateUser; 