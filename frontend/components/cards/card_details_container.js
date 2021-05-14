import {connect} from 'react-redux';

// ACTIONS
import { fetchCard } from '../../actions/card_actions';					
import { fetchUser } from '../../actions/user_actions';					

import CardDetails from './card_details';						//display component

const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.match.params.cardId; 
  const card = state.entities.cards[cardId]; 

  return card ? ({
    card,
    user: state.entities.users[card.creatorId],
  }) : ({
    card,
  })
}

const mapDispatchToProps = (dispatch) => ({
  fetchCard: (cardId) => dispatch(fetchCard(cardId)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardDetails);