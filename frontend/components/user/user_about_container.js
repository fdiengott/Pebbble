import {connect} from 'react-redux';
import { fetchUser } from '../../actions/user_actions';					//actions
import UserAbout from './user_about';						//display component

const mapStateToProps = (state) => ({
  user: state.entities.users[state.session.id],
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAbout);