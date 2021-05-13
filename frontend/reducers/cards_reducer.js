import {
  RECEIVE_CARDS,
  RECEIVE_CARD,
  REMOVE_CARD,
} from '../actions/card_actions'; 


const cardsReducer = (state = {}, action) => {
  Object.freeze(state); 

  switch (action.type) {
    case RECEIVE_CARDS:
      return action.cards; 
      
    case RECEIVE_CARD:
      return {...state, [action.card.id]: action.card}; 
      
    case REMOVE_CARD:
      let nextState = {...state}; 
      delete nextState[action.cardId]; 
      return nextState; 
      
    default:
      return state;
  }

}

export default cardsReducer; 