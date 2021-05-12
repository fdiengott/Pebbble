import {connect} from 'react-redux';
import Account from './account';						//display component

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
}); 


export default connect(
  mapStateToProps,
)(Account);