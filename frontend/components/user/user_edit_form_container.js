import {connect} from 'react-redux';
import { updateUser } from '../../actions/user_actions';					//actions
import UserEditForm from './user_edit_form';						//display component

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors,
}); 

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user)),
}); 

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserEditForm);