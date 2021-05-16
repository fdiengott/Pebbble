import {connect} from 'react-redux';
import {fetchCardsAndUsers, fetchUserCards } from '../../actions/card_actions';					//actions
import CardIndex from './card_index';						//display component
import { selectCardsByUserId } from '../../reducers/selectors'; 

// selectors
import { 
  selectCardsByCategory, 
  selectAllUsers 
} from '../../reducers/selectors'; 

const mapStateToProps = (state, ownProps) => {
  // debugger
  return ({
  frontpage: ["/:category", "/"].includes(ownProps.match.path),
  cards: selectCardsByUserId(state, ownProps.match.params.userId), 
  users: selectAllUsers(state), // all users, as an object,
  userId: ownProps.match.params.userId, 
  cardsByCategory: selectCardsByCategory(state, ownProps.match.params.category)
})}; 

const mapDispatchToProps = (dispatch) => ({
  fetchCardsAndUsers: () => dispatch(fetchCardsAndUsers()),
  fetchUserCards: (userId) => dispatch(fetchUserCards(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardIndex);