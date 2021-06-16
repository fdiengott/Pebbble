import {
  RECEIVE_CARDS,
  RECEIVE_CARD,
  REMOVE_CARD,
  RECEIVE_CARDS_AND_USERS, 
  RECEIVE_COLLECTION_AND_CARDS,
} from '../actions/card_actions'; 

import {
  RECEIVE_COLLECTIONS_AND_CARDS,
} from '../actions/collection_actions'; 

const cardsReducer = (state = {}, action) => {
  Object.freeze(state); 

  switch (action.type) {
    case RECEIVE_CARDS:
      return action.cards; 
      
    case RECEIVE_CARD:
      return { ...state, [action.card.id]: action.card }; 
      
    case REMOVE_CARD:
      let nextState = {...state}; 
      delete nextState[action.cardId]; 
      return nextState; 

    // comes from follows
    case RECEIVE_CARDS_AND_USERS: 
      return action.data.cards; 

    // comes with collections
    case RECEIVE_COLLECTION_AND_CARDS: 
      return action.data.cards || state; 

    case RECEIVE_COLLECTIONS_AND_CARDS: 
      return {...state, ...action.data.cards}; 
      
    default:
      return state;
  }

}

export default cardsReducer; 