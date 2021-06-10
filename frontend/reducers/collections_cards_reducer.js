import {
  RECEIVE_COLLECTIONS_CARD,
  REMOVE_COLLECTIONS_CARD, 
} from '../actions/collections_card_actions'; 

const collectionsCardsReducer = (state = {}, action) => {
  Object.freeze(state); 

  switch (action.type) {
    case RECEIVE_COLLECTIONS_CARD:
      // return { ...state, [action.collectionsCard.id]: action.collectionsCard }
      debugger
      return action.collectionsCard; 

    case REMOVE_COLLECTIONS_CARD:
      let nextState = {...state}; 
      delete nextState[action.collectionsCardId]
      return nextState; 

    default:
      return state; 
  }
}; 

export default collectionsCardsReducer; 