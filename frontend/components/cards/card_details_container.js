import {connect} from 'react-redux';

// ACTIONS
import { fetchCard, deleteCard } from '../../actions/card_actions';					
import { fetchUser } from '../../actions/user_actions';		
import { createFollow, deleteFollow, fetchUserFollows } from '../../actions/follow_actions';
import { signInError } from '../../actions/session_actions'; 
import { openModal } from '../../actions/modal_actions'; 
import { createLike, deleteLike, fetchUserLikes } from '../../actions/like_actions';
import { selectFollowedUsers } from '../../reducers/selectors'; 


import CardDetails from './card_details';						//display component

const mapStateToProps = (state, ownProps) => {
  const cardId = Number(ownProps.match.params.cardId); 
  const card = state.entities.cards[cardId]; 
  // const user = state.entities.users[card.creatorId]; 

  return card ? ({
    card,
    user: state.entities.users[card.creatorId],
    currentUserId: state.session.id, 
    follows: state.entities.follows, 
    followingUser: selectFollowedUsers(state, state.session.id).includes(card.creatorId),
    errors: state.errors,
    likes: Object.values(state.entities.likes),
  }) : ({
    card,
    currentUserId: state.session.id, 
    errors: state.errors,
  })
}

const mapDispatchToProps = (dispatch) => ({
  fetchCard: (cardId) => dispatch(fetchCard(cardId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  deleteCard: (cardId) => dispatch(deleteCard(cardId)),
  openModal: (cardId) => dispatch(openModal(cardId)),

  // follows
  fetchUserFollows: (followerId) => (
    dispatch(fetchUserFollows(followerId))
  ),
  followUser: follow => dispatch(createFollow(follow)),
  unfollowUser: followId => dispatch(deleteFollow(followId)),
  signInError: () => dispatch(signInError()),

  // likes
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (likeId) => dispatch(deleteLike(likeId)), 
  fetchUserLikes: (userId) => dispatch(fetchUserLikes(userId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardDetails);