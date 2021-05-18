import * as FollowAPIUtil from '../util/follow_api_util'; 

export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS"; 
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW"; 
export const REMOVE_FOLLOW = "REMOVE_FOLLOW"; 
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"; 

// ACTIONS
const receiveFollows = (follows) => ({
  type: RECEIVE_FOLLOWS,
  follows
}); 
const receiveFollow = (follow) => ({
  type: RECEIVE_FOLLOW,
  follow
}); 
const removeFollow = (followId) => ({
  type: REMOVE_FOLLOW,
  followId
}); 
const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
}); 


// THUNK ACTION CREATORS

export const fetchFollows = () => dispatch => (
  FollowAPIUtil.fetchFollows().then(
    follows => dispatch(receiveFollows(follows)), 
    err => dispatch(receiveErrors(err.responseJSON))
  )
); 
export const createFollow = (follow) => dispatch => (
  FollowAPIUtil.createFollow(follow).then(
    follow => dispatch(receiveFollow(follow)), 
    err => dispatch(receiveErrors(err.responseJSON))
  )
); 
export const deleteFollow = (followId) => dispatch => (
  FollowAPIUtil.deleteFollow(followId).then(
    follow => dispatch(removeFollow(follow)), 
    err => dispatch(receiveErrors(err.responseJSON))
  )
); 