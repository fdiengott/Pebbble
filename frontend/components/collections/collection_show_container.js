import {connect} from 'react-redux';
import { fetchCollectionCards } from '../../actions/card_actions';				//actions
import CollectionShow from './collection_show';				//display component
import { selectCardsByCollectionId } from '../../reducers/selectors'; 


const mapStateToProps = (state, ownProps) => {
  const collectionId = ownProps.match.params.collectionId; 

  return ({
    collectionId, 
    collection: state.entities.collections[collectionId],
    cards: selectCardsByCollectionId(Object.values(state.entities.collections), collectionId),
})};

// const mapDispatchToProps = (dispatch) => ({
//   fetchCollectionCards: (collectionId) => dispatch(fetchCollectionCards(collectionId)),
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(CollectionShow);