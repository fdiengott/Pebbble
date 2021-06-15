import { combineReducers } from 'redux'; 

import users from './users_reducer'; 
import cards from './cards_reducer'; 
import likes from './likes_reducer'; 
import follows from './follows_reducer'; 
import collections from './collections_reducer'; 
import collectionsCards from './collections_cards_reducer'; 

const entitiesReducer = combineReducers({
  users,
  cards,
  likes,  
  follows, 
  collections, 
  collectionsCards, 
}); 

export default entitiesReducer; 