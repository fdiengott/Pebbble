import {connect} from 'react-redux';
import { fetchLikedCards } from '../../actions/card_actions';				//actions
import CardIndex from './card_index';				//display component

const mapStateToProps = (state, ownProps) => ({
  likedCardsPage: true, 
  userId: ownProps.match.params.userId || state.session.id,
  cards: state.entities.cards, 
});

const mapDispatchToProps = (dispatch) => ({
  fetchLikedCards: (userId) => dispatch(fetchLikedCards(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardIndex);