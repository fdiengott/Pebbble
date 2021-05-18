import {connect} from 'react-redux';
import Footer from './footer';						//display component

const mapStateToProps = (state, ownProps) => ({
  url: ownProps.location.pathname, 
  pathsNotToRender: ["/login", "/signup", "/cards/new"],
})

export default connect(
  mapStateToProps,
)(Footer);