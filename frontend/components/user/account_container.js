import {connect} from 'react-redux';
import Account from './account';						//display component

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  // cards: selector for num cards,
  // collections: selector for num collections,
  // likes, number of liked cards
}); 


export default connect(
  mapStateToProps,
)(Account);