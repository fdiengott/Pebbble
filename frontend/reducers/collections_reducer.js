import {
  RECEIVE_COLLECTIONS, 
  RECEIVE_COLLECTION, 
  REMOVE_COLLECTION, 
} from '../actions/collection_actions'; 

import { RECEIVE_COLLECTION_AND_CARDS } from '../actions/card_actions'; 

const collectionsReducer = (state = {}, action) => {
  Object.freeze(state); 

  switch (action.type) {
    case RECEIVE_COLLECTIONS: 
      return action.collections; 

    case RECEIVE_COLLECTION:
      return { ...state, [action.collection.id]: action.collection }

    case REMOVE_COLLECTION:
      let nextState = {...state}; 
      delete nextState[action.collectionId]
      return nextState; 

    case RECEIVE_COLLECTION_AND_CARDS:
      return action.data.collection; 

    default:
      return state; 
  }
}; 

export default collectionsReducer; 