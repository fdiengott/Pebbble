import {connect} from 'react-redux';
import {fetchCardsAndUsers, fetchUserCards } from '../../actions/card_actions';					//actions
import CardIndex from './card_index';						//display component

// selectors
import { 
  allCardsArray, 
  selectCardsByCategory, 
  selectAllUsers 
} from '../../reducers/selectors'; 

const mapStateToProps = (state, ownProps) => ({
  // cards: allCardsArray(state), 
  users: selectAllUsers(state), // all users, as an object,
  cardsByCategory: selectCardsByCategory(state, ownProps.match.params.category)
}); 

const mapDispatchToProps = (dispatch) => ({
  fetchCardsAndUsers: () => dispatch(fetchCardsAndUsers()),
  fetchUserCards: (userId) => dispatch(fetchUserCards(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardIndex);