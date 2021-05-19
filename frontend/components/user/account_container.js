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
  follows: state.entities.follows, 
  followingUser: selectFollowedUsers(state, state.session.id).includes(userId),
  // currentUserCards: selectCardsByUserId(state, state.session.id),
  // cards: selectCardsByUserId(ownProps.match.params.userId),
  // collections: selector for num collections,
  // likes, number of liked cards
})}; 

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchUserFollows: (followerId) => (
    dispatch(fetchUserFollows(followerId))
  ),
  followUser: follow => dispatch(createFollow(follow)),
  unfollowUser: followId => dispatch(deleteFollow(followId)),
    
  // fetchFollowedUsers: (followerId) => (
  //   dispatch(fetchFollowedUsers(followerId))
  // ),
  // fetchUsersCards: (userId) => dispatch(fetchUserCards(userId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);