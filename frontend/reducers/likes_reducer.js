import {
  RECEIVE_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE,
} from '../actions/like_actions'; 

const likesReducer = (state = {}, action) => {
  Object.freeze(state); 

  switch (action.type) {
    case RECEIVE_LIKES:
      return action.likes; 

    case RECEIVE_LIKE:
      return {...state, [action.like.id]: action.like}; 

    case REMOVE_LIKE:
      let nextState = {...state}; 
      delete nextState[action.likeId]; 
      return nextState;       
  
    default:
      return state; 
  }
}; 

export default likesReducer; 