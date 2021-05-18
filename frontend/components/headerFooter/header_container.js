import {connect} from 'react-redux';
import Header from './header';						//display component

const mapStateToProps = (state, ownProps) => {
  debugger // check ownProps. path
  return ({
  url: ownProps.location.pathname, 
  loggedIn: Boolean(state.session.id),
  homePage: ["/", "/all"].includes(ownProps.location.pathname),
  pathsNotToRender: ["/login", "/signup"],
})}; 

export default connect(
  mapStateToProps,
)(Header);