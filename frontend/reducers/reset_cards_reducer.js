import { TOGGLE_RESET_ALL_CARDS } from '../actions/card_actions'; 


const ResetCardsReducer = (state = false, action) => {
  Object.freeze(state); 

  switch (action.type) {
    case TOGGLE_RESET_ALL_CARDS:
      return !state; 
      
    default:
      return state;
  }
}
  

export default ResetCardsReducer; 