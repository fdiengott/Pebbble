import * as LikeAPIUtil from '../util/like_api_util'; 

export const RECEIVE_LIKES = "RECEIVE_LIKES"; 
export const RECEIVE_LIKE = "RECEIVE_LIKE"; 
export const REMOVE_LIKE = "REMOVE_LIKE"; 
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"; 

// ACTIONS
const receiveLike = (like) => ({
  type: RECEIVE_LIKE, 
  like
}); 

const removeLike = (likeId) => ({
  type: REMOVE_LIKE, 
  likeId
}); 

const receiveLikes = (likes) => ({
  type: RECEIVE_LIKES, 
  likes
}); 

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS, 
  errors
})


// THUNK ACTION CREATORS

export const createLike = (like) => dispatch => (
  LikeAPIUtil.createLike(like).then(
    receivedLike => dispatch(receiveLike(receivedLike)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
); 

export const deleteLike = (likeId) => dispatch => (
  LikeAPIUtil.deleteLike(likeId).then(
    receivedLike => dispatch(removeLike(receivedLike.id)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
); 

export const fetchUserLikes = (likerId) => dispatch => (
  LikeAPIUtil.fetchUserLikes(likerId).then(
    likes => dispatch(receiveLikes(likes)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
); 
