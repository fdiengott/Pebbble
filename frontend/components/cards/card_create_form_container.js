import {connect} from 'react-redux';
import { createCard } from '../../actions/card_actions';					//actions
import { clearErrors } from '../../actions/session_actions'; 

import CardForm from './card_form';						//display component

const mapStateToProps = (state) => ({
  errors: state.errors, 

  title: "", 
  description: "", 
  animated: false, 
  category: "",  
  imgFile: null, 
  imgUrl: null, 
  disabled: true,
  creatorId: state.session.id,
  redirect: false,
  cardId: 0
}); 

const mapDispatchToProps = (dispatch) => ({
  processCard: (card) => dispatch(createCard(card)),
  clearErrors: () => dispatch(clearErrors()),
}); 

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardForm);

