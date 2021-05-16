import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';					//actions
import CurrentUserDropdown from './current_user_dropdown';						//display component

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.id),
  currentUser: state.entities.users[state.session.id]
}); 

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
}); 

export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(CurrentUserDropdown);