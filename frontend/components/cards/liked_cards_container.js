import {connect} from 'react-redux';
import { fetchLikedCards } from '../../actions/card_actions';				//actions
import { createLike, deleteLike, fetchUserLikes } from '../../actions/like_actions';
import { openModal } from '../../actions/modal_actions';
import { selectUserLikes } from '../../reducers/selectors'; 

import CardIndex from './card_index';				//display component

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.id; 
  
  return {
    currentUserId, 
    likedCardsPage: true, 
    numPages: Math.ceil(state.ui.cardCount / 12),
    userId: ownProps.match.params.userId || currentUserId,
    cards: state.entities.cards, 
    likes: selectUserLikes(state, currentUserId),
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchLikedCards: (data) => dispatch(fetchLikedCards(data)),
  fetchUserLikes: (userId) => dispatch(fetchUserLikes(userId)),
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (likeId) => dispatch(deleteLike(likeId)),
  openModal: (cardId) => dispatch(openModal(cardId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardIndex);