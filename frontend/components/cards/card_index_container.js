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
  debugger
  const userId = ownProps.match.params.userId; 
  const currentUserId = state.session.id; 
  
  return ({
    userId, 
    currentUserId,
    frontpage: ["/:category", "/"].includes(ownProps.match.path),
    cards: userId ? selectCardsByUserId(state, userId) : selectCardsByUserId(state, currentUserId), 
    users: selectAllUsers(state), // all users, as an object,
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