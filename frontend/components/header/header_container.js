import {connect} from 'react-redux';
import Header from './header';						//display component

const mapStateToProps = (state, ownProps) => ({
  url: ownProps.location.pathname, 
  loggedIn: Boolean(state.session.id),
  homePage: ["/", "/all"].includes(ownProps.location.pathname),
})

export default connect(
  mapStateToProps,
)(Header);