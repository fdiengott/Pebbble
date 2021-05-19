import {connect} from 'react-redux';
import {fetchCardsAndUsers, fetchFollowedUsersCards, fetchUserCards } from '../../actions/card_actions';					//actions
import { fetchFollows, fetchUserFollows } from '../../actions/follow_actions'; 
import CardIndex from './card_index';						//display component
import { selectCardsByUserId, selectFollowedUsers } from '../../reducers/selectors'; 

// selectors
import { 
  selectCardsByCategory, 
  selectAllUsers 
} from '../../reducers/selectors'; 

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId; 
  const currentUserId = state.session.id; 
  
  return ({
    userId, 
    currentUserId,
    frontpage: ["/:category", "/"].includes(ownProps.match.path),
    cards: userId ? selectCardsByUserId(state, userId) : selectCardsByUserId(state, currentUserId), 
    users: selectAllUsers(state), // all users, as an object,
    cardsByCategory: selectCardsByCategory(state, ownProps.match.params.category),
    selectFollowedUsers: selectFollowedUsers(state, currentUserId),
})}; 

const mapDispatchToProps = (dispatch) => ({
  fetchCardsAndUsers: () => dispatch(fetchCardsAndUsers()),
  fetchUserCards: (userId) => dispatch(fetchUserCards(userId)),
  fetchFollows: () => dispatch(fetchFollows()),
  fetchUserFollows: (followerId) => dispatch(fetchUserFollows(followerId)),
  fetchFollowedUsersCards: (followerId) => dispatch(fetchFollowedUsersCards(followerId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardIndex);