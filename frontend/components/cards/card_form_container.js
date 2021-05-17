import {connect} from 'react-redux';
import { createCard } from '../../actions/card_actions';					//actions
import { clearErrors } from '../../actions/session_actions'; 

import CardForm from './card_form';						//display component

const mapStateToProps = (state) => ({
  errors: state.errors, 
}); 

const mapDispatchToProps = (dispatch) => ({
  createCard: (card) => dispatch(createCard(card)),
  clearErrors: () => dispatch(clearErrors()),
}); 

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardForm);

