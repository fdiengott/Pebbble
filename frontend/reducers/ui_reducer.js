import { combineReducers } from 'redux'; 
import modal from './modal_reducer'; 
import cardCount from './card_count_reducer'; 

const uiReducer = combineReducers({
  modal,
  cardCount
});

export default uiReducer; 