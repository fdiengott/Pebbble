import {connect} from 'react-redux';
import { fetchLikedCards } from '../../actions/card_actions';				//actions
import { createLike, deleteLike, fetchUserLikes } from '../../actions/like_actions';
import { selectUserLikes } from '../../reducers/selectors'; 

import CardIndex from './card_index';				//display component

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.id; 
  
  return {
    currentUserId, 
    likedCardsPage: true, 
    userId: ownProps.match.params.userId || currentUserId,
    cards: state.entities.cards, 
    likes: selectUserLikes(state, currentUserId),
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchLikedCards: (userId) => dispatch(fetchLikedCards(userId)),
  fetchUserLikes: (userId) => dispatch(fetchUserLikes(userId)),
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (likeId) => dispatch(deleteLike(likeId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardIndex);