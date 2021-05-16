import {connect} from 'react-redux';
import Footer from './footer';						//display component

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
  url: ownProps.location.pathname, 
  homePage: ["/", "/all"].includes(ownProps.location.pathname),
  pathsNotToRender: ["/login", "/signup", "/cards/new"],
}}

export default connect(
  mapStateToProps,
)(Footer);