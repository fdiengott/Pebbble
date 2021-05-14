import {connect} from 'react-redux';
import {fetchCards, fetchUserCards} from '../../actions/card_actions';					//actions
import CardIndex from './card_index';						//display component

// selectors
import { cardsArray, selectCardsByCategory } from '../../reducers/selectors'; 

const mapStateToProps = (state, ownProps) => ({
  cards: cardsArray(state), 
  cardsByCategory: selectCardsByCategory(state, ownProps.match.params.category)
}); 

const mapDispatchToProps = (dispatch) => ({
  fetchCards: () => dispatch(fetchCards()),
  fetchUserCards: (userId) => dispatch(fetchUserCards(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardIndex);