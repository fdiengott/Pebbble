import { combineReducers } from 'redux'; 

import users from './users_reducer'; 
import cards from './cards_reducer'; 

const entitiesReducer = combineReducers({
  users,
  // cards, 
}); 

export default entitiesReducer; 