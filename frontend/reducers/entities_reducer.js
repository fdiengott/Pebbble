import { combineReducers } from 'redux'; 

import users from './users_reducer'; 
import cards from './cards_reducer'; 
import follows from './follows_reducer'; 

const entitiesReducer = combineReducers({
  users,
  cards, 
  follows, 
}); 

export default entitiesReducer; 