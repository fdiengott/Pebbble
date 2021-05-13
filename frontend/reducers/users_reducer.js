import { RECEIVE_CURRENT_USER } from '../actions/session_actions'; 
import {
  RECEIVE_USERS,
  RECEIVE_USER,
} from '../actions/user_actions'; 

const usersReducer = (state = {}, action) => {
  Object.freeze(state); 

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {...state, [action.currentUser.id]: action.currentUser}
      
    case RECEIVE_USER: 
      return {...state, [action.user.id]: action.user}

    case RECEIVE_USERS: 
      // I'M UNSURE WHAT TO RETURN HERE
      return {...state, ...action.users}; 

    default:
      return state; 
  }
}

export default usersReducer; 