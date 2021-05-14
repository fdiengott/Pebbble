import {connect} from 'react-redux';
import { fetchCard } from '../../actions/card_actions';					//actions
import CardDetails from './card_details';						//display component

const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.match.params.cardId; 
  const card = state.entities.cards[cardId]; 
  
  return {
  card,
  user: state.entities.users[card.id]
}; }

const mapDispatchToProps = (dispatch) => ({
  fetchCard: (cardId) => dispatch(fetchCard(cardId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardDetails);