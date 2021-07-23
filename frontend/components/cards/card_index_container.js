import { connect } from 'react-redux';
import { withRouter } from 'react-router'; 

import { fetchCardsAndUsers, fetchFollowedUsersCards, fetchUserCards, fetchCollectionCards } from '../../actions/card_actions';					//actions
import { fetchFollows, fetchUserFollows } from '../../actions/follow_actions'; 
import { createLike, deleteLike, fetchUserLikes } from '../../actions/like_actions';

import CardIndex from './card_index';						//display component
import { 
  selectCardsByUserId, 
  selectFollowedUsers, 
  selectCardsByCollectionId,
  selectUserLikes, 
} from '../../reducers/selectors'; 

import { openModal } from '../../actions/modal_actions'; 

// selectors
import { 
  selectCardsByCategory, 
  selectAllUsers 
} from '../../reducers/selectors'; 

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId; 
  const currentUserId = state.session.id; 
  const collectionId = ownProps.match.params.collectionId;
  
  return {
    userId, 
    currentUserId,
    collectionId,
    frontpage: ["/:category", "/"].includes(ownProps.match.path),
    cards: state.entities.cards, 
    numPages: Math.ceil(state.ui.cardCount / 12),
    users: selectAllUsers(state), // all users, as an object,
    selectFollowedUsers: selectFollowedUsers(state, currentUserId),
    collectionCards: selectCardsByCollectionId(Object.values(state.entities.cards), collectionId),
    likes: selectUserLikes(state, currentUserId),
  }
}; 

const mapDispatchToProps = (dispatch) => ({
  fetchCardsAndUsers: (data) => dispatch(fetchCardsAndUsers(data)),
  fetchUserCards: (data) => dispatch(fetchUserCards(data)),
  fetchFollows: () => dispatch(fetchFollows()),
  fetchUserFollows: (followerId) => dispatch(fetchUserFollows(followerId)),
  fetchFollowedUsersCards: (data) => dispatch(fetchFollowedUsersCards(data)),
  fetchCollectionCards: (data) => dispatch(fetchCollectionCards(data)),
  fetchUserLikes: (userId) => dispatch(fetchUserLikes(userId)), 
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (likeId) => dispatch(deleteLike(likeId)),
  openModal: (cardId) => dispatch(openModal(cardId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardIndex));