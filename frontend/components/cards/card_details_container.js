import {connect} from 'react-redux';

// ACTIONS
import { fetchCard, deleteCard } from '../../actions/card_actions';					
import { fetchUser } from '../../actions/user_actions';		
import { createFollow, deleteFollow, fetchUserFollows } from '../../actions/follow_actions';					//actions
import { selectFollowedUsers } from '../../reducers/selectors'; 

import CardDetails from './card_details';						//display component

const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.match.params.cardId; 
  const card = state.entities.cards[cardId]; 
  const user = state.entities.users[card.creatorId]; 

  return card ? ({
    card,
    user,
    currentUserId: state.session.id, 
    follows: state.entities.follows, 
    followingUser: selectFollowedUsers(state, state.session.id).includes(user.id),
  }) : ({
    card,
    currentUserId: state.session.id, 
  })
}

const mapDispatchToProps = (dispatch) => ({
  fetchCard: (cardId) => dispatch(fetchCard(cardId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  deleteCard: (cardId) => dispatch(deleteCard(cardId)),

  // follows
  fetchUserFollows: (followerId) => (
    dispatch(fetchUserFollows(followerId))
  ),
  followUser: follow => dispatch(createFollow(follow)),
  unfollowUser: followId => dispatch(deleteFollow(followId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardDetails);