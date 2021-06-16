import {connect} from 'react-redux';

import { deleteCollection, fetchCollection } from '../../actions/collection_actions';				//actions
import { openModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions'; 

import CollectionShow from './collection_show';				//display component


const mapStateToProps = (state, ownProps) => {
  const collectionId = ownProps.match.params.collectionId; 
  const collection = state.entities.collections[collectionId]; 

  return ({
    collectionId, 
    collection,
    curator: state.entities.users?.[collection?.curatorId],
    isCurrentUsers: state.session.id && collection?.curatorId === state.session.id
})};

const mapDispatchToProps = (dispatch) => ({
  fetchCollection: collectionId => dispatch(fetchCollection(collectionId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  deleteCollection: collectionId => dispatch(deleteCollection(collectionId)),
  openModal: cardId => dispatch(openModal(cardId)),
  updateCollection: collection => dispatch(updateCollection(collection)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CollectionShow);