import {connect} from 'react-redux';
import Account from './account';						//display component
import { selectCardsByUserId, selectUserByCard } from '../../reducers/selectors'; 
import { selectFollowedUsers } from '../../reducers/selectors'; 
import { fetchUser } from '../../actions/user_actions';					//actions
import { createFollow, deleteFollow, fetchUserFollows } from '../../actions/follow_actions';					//actions


const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.match.params.userId); 
  const currentUserId = state.session.id; 

  return ({
  currentUser: state.entities.users[currentUserId],
  userShow: ownProps.match.path === "/users/:userId",
  userId,
  user: state.entities.users[ownProps.match.params.userId],
  followingUser: selectFollowedUsers(state, state.session.id).includes(userId),
  follows: state.entities.follows, 
  // currentUserCards: selectCardsByUserId(state, state.session.id),
  // cards: selectCardsByUserId(ownProps.match.params.userId),
  // collections: selector for num collections,
  // likes, number of liked cards
})}; 

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchFollowedUsers: (followerId) => (
    dispatch(fetchFollowedUsers(followerId))
  ),
  fetchUserFollows: (followerId) => (
    dispatch(fetchUserFollows(followerId))
  ),
  followUser: follow => dispatch(createFollow(follow)),
  unfollowUser: followId => dispatch(deleteFollow(followId)),

  // fetchUsersCards: (userId) => dispatch(fetchUserCards(userId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);