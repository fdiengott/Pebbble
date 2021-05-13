import {
  RECEIVE_CURRENT_USER, 
  RECEIVE_SESSION_ERRORS,
} from '../actions/session_actions'; 
import { 
  RECEIVE_USER_ERRORS,
  RECEIVE_USER,
} from '../actions/user_actions'; 

const errorsReducer = (state = { errors: [] }, action) => {
  Object.freeze(state); 
  const _nullErrors = { errors: [] }; 

  switch (action.type) {
    // Set errors
    case RECEIVE_SESSION_ERRORS:
      return action.errors; 
    case RECEIVE_USER_ERRORS:
      return action.errors; 
      
      
    // Reset errors
    case RECEIVE_CURRENT_USER: 
      return _nullErrors; 
    case RECEIVE_USER: 
      return _nullErrors; 
  
    default:
      return state; 
  }
}; 

export default errorsReducer; 