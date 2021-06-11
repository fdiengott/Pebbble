import {
  RECEIVE_CURRENT_USER, 
  CLEAR_ERRORS,
} from '../actions/session_actions'; 
import { 
  RECEIVE_USER,
} from '../actions/user_actions'; 
import { 
  RECEIVE_ERRORS,
  RECEIVE_CARD,
} from '../actions/card_actions'; 
import { CLOSE_MODAL } from '../actions/modal_actions';

const errorsReducer = (state = [], action) => {
  Object.freeze(state); 
  const _nullErrors = []; 
  
  switch (action.type) {
    // Set errors
    case RECEIVE_ERRORS:
      return action.errors; 
      
    // Reset errors
    case RECEIVE_CURRENT_USER: 
      return _nullErrors; 
    case RECEIVE_USER: 
      return _nullErrors; 
    case RECEIVE_CARD: 
      return _nullErrors; 
    case CLEAR_ERRORS: 
      return _nullErrors; 
    case CLOSE_MODAL: 
      return _nullErrors; 
      
  
    default:
      return state; 
  }
}; 

export default errorsReducer; 