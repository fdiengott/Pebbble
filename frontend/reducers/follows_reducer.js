import {
  RECEIVE_FOLLOWS,
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW,
} from '../actions/follow_actions'; 
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const followsReducer = (state = {}, action) => {
  Object.freeze(state); 

  switch (action.type) {
    case RECEIVE_FOLLOWS:
      return action.follows; 

    case RECEIVE_FOLLOW:
      return {...state, [action.follow.id]: action.follow}; 

    case REMOVE_FOLLOW:
      let nextState = {...state}; 
      delete nextState[action.followId]; 
      return nextState; 

    case LOGOUT_CURRENT_USER: 
      return {}; 

    default:
      return state; 
  }

}; 

export default followsReducer; 