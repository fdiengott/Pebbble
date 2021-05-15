import {connect} from 'react-redux';
import Footer from './footer';						//display component

const mapStateToProps = (state, ownProps) => ({
  url: ownProps.location.pathname, 
  homePage: ["/", "/all"].includes(ownProps.location.pathname),
  pathsNotToRender: ["/login", "/signup"],
})

export default connect(
  mapStateToProps,
)(Footer);