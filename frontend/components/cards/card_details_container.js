import {connect} from 'react-redux';

// ACTIONS
import { fetchCard, deleteCard } from '../../actions/card_actions';					
import { fetchUser } from '../../actions/user_actions';					

import CardDetails from './card_details';						//display component

const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.match.params.cardId; 
  const card = state.entities.cards[cardId]; 

  return card ? ({
    card,
    user: state.entities.users[card.creatorId],
    currentUserId: state.session.id, 
  }) : ({
    card,
    currentUserId: state.session.id, 
  })
}

const mapDispatchToProps = (dispatch) => ({
  fetchCard: (cardId) => dispatch(fetchCard(cardId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  deleteCard: (cardId) => dispatch(deleteCard(cardId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardDetails);