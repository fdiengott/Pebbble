import * as UserAPIUtil from '../util/user_api_util'; 

export const RECEIVE_USERS = "RECEIVE_USERS"; 
export const RECEIVE_USER = "RECEIVE_USER"; 
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"; 

// ACTIONS
const receiveUsers = (users) => ({
  type: RECEIVE_USERS, 
  users
}); 

const receiveUser = (user) => ({
  type: RECEIVE_USER, 
  user
}); 

const receiveUserErrors = (errors) => ({
  type: RECEIVE_ERRORS, 
  errors
}); 

// THUNK ACTION CREATORS
export const fetchUsers = () => dispatch => (
  UserAPIUtil.fetchUsers().then(
    users => dispatch(receiveUsers(users))
  )
); 
export const fetchUser = (userId) => dispatch => (
  UserAPIUtil.fetchUser(userId).then(
    user => dispatch(receiveUser(user)),
    err => dispatch(receiveUserErrors(err.responseJSON))
  )
); 

export const updateUser = (user) => dispatch => (
  UserAPIUtil.updateUser(user).then(
    newUser => dispatch(receiveUser(newUser)),
    err => dispatch(receiveUserErrors(err.responseJSON || [err.statusText]))
  )
); 


export const fetchFollowers = (creatorId) => dispatch => (
  UserAPIUtil.fetchFollowers(creatorId).then(
    users => dispatch(receiveUsers(users)), 
    err => dispatch(receiveUserErrors(err))
  )
); 

export const fetchFollowedUsers = (followerId) => dispatch => (
  UserAPIUtil.fetchFollowedUsers(followerId).then(
    users => dispatch(receiveUsers(users)), 
    err => dispatch(receiveUserErrors(err.responseJSON))
  )
); 

// TESTING
// window.fetchUsers = fetchUsers; 
// window.fetchUser = fetchUser; 
// window.updateUser = updateUser; 
// window.fetchFollowedUsers = fetchFollowedUsers; 
// window.fetchFollowers = fetchFollowers; 