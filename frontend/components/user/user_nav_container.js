import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';					//actions
import UserNav from './user_nav';						//display component

// const mapStateToProps = (state) => ({
  
// })

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
})

export default connect(
  null, 
  mapDispatchToProps,
)(UserNav);