import { RECEIVE_CURRENT_USER } from '../actions/session_actions'; 
import { RECEIVE_CARDS_AND_USERS } from '../actions/card_actions'; 
import {
  RECEIVE_USERS,
  RECEIVE_USER,
} from '../actions/user_actions'; 
import { RECEIVE_COLLECTION_AND_CARDS } from '../actions/card_actions'; 

const usersReducer = (state = {}, action) => {
  Object.freeze(state); 

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {...state, [action.currentUser.id]: action.currentUser}
      
    case RECEIVE_USER: 
      return {...state, [action.user.id]: action.user}

    case RECEIVE_USERS: 
      return {...state, ...action.users}; 

    case RECEIVE_CARDS_AND_USERS: 
      return {...state, ...action.data.users }

    case RECEIVE_COLLECTION_AND_CARDS: 
      return {...state, ...action.data.users }

    default:
      return state; 
  }
}

export default usersReducer; 