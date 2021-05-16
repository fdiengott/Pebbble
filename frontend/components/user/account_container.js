import {connect} from 'react-redux';
import Account from './account';						//display component
import { selectCardsByUserId, selectUserByCard } from '../../reducers/selectors'; 
import { fetchUser } from '../../actions/user_actions';					//actions


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  currentUserCards: selectCardsByUserId(state.session.id),
  user: state.entities.users[ownProps.match.params.userId],
  cards: selectCardsByUserId(ownProps.match.params.userId),
  // collections: selector for num collections,
  // likes, number of liked cards
}); 

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchUsersCards: (userId) => dispatch(fetchUserCards(userId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);