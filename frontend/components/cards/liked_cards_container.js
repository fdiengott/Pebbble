import {connect} from 'react-redux';
import { fetchLikedCards } from '../../actions/card_actions';				//actions
import { fetchUserLikes } from '../../actions/like_actions';
import { selectUserLikes } from '../../reducers/selectors'; 

import CardIndex from './card_index';				//display component

const mapStateToProps = (state, ownProps) => ({
  likedCardsPage: true, 
  userId: ownProps.match.params.userId || state.session.id,
  cards: state.entities.cards, 
  likes: selectUserLikes(state, state.session.id),
});

const mapDispatchToProps = (dispatch) => ({
  fetchLikedCards: (userId) => dispatch(fetchLikedCards(userId)),
  fetchUserLikes: (userId) => dispatch(fetchUserLikes(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardIndex);