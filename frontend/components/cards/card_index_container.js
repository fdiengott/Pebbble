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
    cards: selectCardsByUserId(state, userId || currentUserId), 
    users: selectAllUsers(state), // all users, as an object,
    cardsByCategory: selectCardsByCategory(state, ownProps.match.params.category),
    selectFollowedUsers: selectFollowedUsers(state, currentUserId),
    collectionCards: selectCardsByCollectionId(Object.values(state.entities.cards), collectionId),
    likes: selectUserLikes(state, currentUserId),
  }
}; 

const mapDispatchToProps = (dispatch) => ({
  fetchCardsAndUsers: () => dispatch(fetchCardsAndUsers()),
  fetchUserCards: (userId) => dispatch(fetchUserCards(userId)),
  fetchFollows: () => dispatch(fetchFollows()),
  fetchUserFollows: (followerId) => dispatch(fetchUserFollows(followerId)),
  fetchFollowedUsersCards: (followerId) => dispatch(fetchFollowedUsersCards(followerId)),
  fetchCollectionCards: (collectionId) => dispatch(fetchCollectionCards(collectionId)),
  fetchUserLikes: (userId) => dispatch(fetchUserLikes(userId)), 
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (likeId) => dispatch(deleteLike(likeId)),
  openModal: (cardId) => dispatch(openModal(cardId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardIndex));