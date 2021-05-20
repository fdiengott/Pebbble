import {connect} from 'react-redux';
import { createCollection, fetchUserCollections } from '../../actions/collection_actions';				//actions
import { createCollectionsCard } from '../../actions/collections_card_actions';				//actions
import { closeModal } from '../../actions/modal_actions'; 
import CollectionModal from './collection_modal';				//display component

const mapStateToProps = (state) => {
  return ({
  currentUserId: state.session.id, 
  collections: state.entities.collections, 
  active: state.ui.modal,
  haveCollections: !!Object.keys(state.entities.collections).length,
})};

const mapDispatchToProps = (dispatch) => ({
  fetchUserCollections: (userId) => dispatch(fetchUserCollections(userId)),
  createCollection: (collection) => dispatch(createCollection(collection)),
  createCollectionsCard: (collection) => dispatch(createCollectionsCard(collection)),
  closeModal: () => dispatch(closeModal()), 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CollectionModal);