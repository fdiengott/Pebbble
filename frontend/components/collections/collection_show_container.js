import {connect} from 'react-redux';

import { fetchCollection } from '../../actions/collection_actions';				//actions
import { fetchUser } from '../../actions/user_actions'; 

import CollectionShow from './collection_show';				//display component


const mapStateToProps = (state, ownProps) => {
  const collectionId = ownProps.match.params.collectionId; 
  const collection = state.entities.collections[collectionId]; 

  return ({
    collectionId, 
    collection,
    curator: collection ? state.entities.users[collection.curatorId] : null,
})};

const mapDispatchToProps = (dispatch) => ({
  fetchCollection: collectionId => dispatch(fetchCollection(collectionId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CollectionShow);