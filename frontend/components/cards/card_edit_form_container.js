import {connect} from 'react-redux';
import { updateCard } from '../../actions/card_actions';					//actions
import { clearErrors } from '../../actions/session_actions'; 

import CardForm from './card_form';						//display component

const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.match.params.cardId; 
  
  const { 
    title,
    description,  
    animated, 
    category, 
    creatorId, 
  } = state.entities.cards[cardId]; 
  return ({
  errors: state.errors, 

  title,
  description, 
  animated, 
  category,  
  imgFile: null, 
  imgUrl: state.entities.cards[cardId].img, 
  disabled: false,
  creatorId,
  redirect: false,
  cardId,
  submitText: "Save",
})}; 

const mapDispatchToProps = (dispatch) => ({
  processCard: (card) => dispatch(updateCard(card)),
  clearErrors: () => dispatch(clearErrors()),
}); 

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardForm);

