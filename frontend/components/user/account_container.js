import {connect} from 'react-redux';
import Account from './account';						//display component
import { selectCardsByUserId, selectUserByCard } from '../../reducers/selectors'; 
import { fetchUser } from '../../actions/user_actions';					//actions


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  userShow: ownProps.match.path === "/users/:userId",
  userId: ownProps.match.params.userId,
  user: state.entities.users[ownProps.match.params.userId],
  // currentUserCards: selectCardsByUserId(state, state.session.id),
  // cards: selectCardsByUserId(ownProps.match.params.userId),
  // collections: selector for num collections,
  // likes, number of liked cards
}); 

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  // fetchUsersCards: (userId) => dispatch(fetchUserCards(userId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);