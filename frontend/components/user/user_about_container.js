import {connect} from 'react-redux';
import { fetchUser } from '../../actions/user_actions';					//actions
import UserAbout from './user_about';						//display component

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  user: state.entities.users[ownProps.match.params.userId],
  userShowPage: ownProps.match.path === "/users/:userId/profile",
}); 

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
}); 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAbout);