import {connect} from 'react-redux';
import Header from './header';						//display component
import { clearErrors } from '../../actions/session_actions'; 
import { fetchCardsAndUsers } from '../../actions/card_actions.js';

const mapStateToProps = (state, ownProps) => ({
  url: ownProps.location.pathname, 
  loggedIn: Boolean(state.session.id),
  homePage: ["/", "/all"].includes(ownProps.location.pathname),
  pathsNotToRender: ["/login", "/signup"],
}); 

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  fetchCardsAndUsers: (data) => dispatch(fetchCardsAndUsers(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);