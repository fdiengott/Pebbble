import {
  RECEIVE_CARDS,
  RECEIVE_CARDS_AND_USERS, 
  RECEIVE_COLLECTION_AND_CARDS,
} from '../actions/card_actions';


const cardCountReducer = (state = -1, action) => {
  Object.freeze(state); 

  debugger
  switch (action.type) {
    case RECEIVE_CARDS:
      return action.data.cardCount; 
    case RECEIVE_CARDS_AND_USERS:
      return action.data.cardCount; 
    case RECEIVE_COLLECTION_AND_CARDS:
      return action.data.cardCount; 
  
    default:
      return state; 
  }
}

export default cardCountReducer; 

