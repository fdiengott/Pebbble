import {connect} from 'react-redux';
import { fetchUserCollections } from '../../actions/collection_actions';				//actions
import CollectionIndex from './collection_index';				//display component

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.match.params.userId,
  collections: state.entities.collections,
  cards: state.entities.cards,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserCollections: (curatorId) => dispatch(fetchUserCollections(curatorId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CollectionIndex);