import { combineReducers } from 'redux'; 
import modal from './modal_reducer'; 
import cardCount from './card_count_reducer'; 
import resetCards from './reset_cards_reducer'; 

const uiReducer = combineReducers({
  modal,
  cardCount, 
  resetCards, 
});

export default uiReducer; 