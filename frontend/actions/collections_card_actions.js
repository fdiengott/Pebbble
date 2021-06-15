import * as CollectionsCardAPIUtil from '../util/collections_card_api_util'; 


export const RECEIVE_COLLECTIONS_CARD = "RECEIVE_COLLECTIONS_CARD"; 
export const REMOVE_COLLECTIONS_CARD = "REMOVE_COLLECTIONS_CARD"; 
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"; 


// ACTIONS
const receiveCollectionsCard = (collectionsCard) => ({
  type: RECEIVE_COLLECTIONS_CARD,
  collectionsCard
}); 
const removeCollectionsCard = (collectionsCardId) => ({
  type: REMOVE_COLLECTIONS_CARD, 
  collectionsCardId
}); 
const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
}); 


// THUNK ACTION CREATORS
export const fetchUserCollectionsCard = (userId) => dispatch => (
  CollectionsCardAPIUtil.fetchUserCollectionsCard(userId).then(
    collectionsCard => dispatch(receiveCollectionsCard(collectionsCard)),
    err => dispatch(receiveErrors(err))
  )
); 

export const createCollectionsCard = (collectionsCard) => dispatch => (
  CollectionsCardAPIUtil.createCollectionsCard(collectionsCard).then(
    res => {dispatch(receiveCollectionsCard(res))},
    err => {dispatch(receiveErrors(err))}
  )
); 
export const deleteCollectionsCard = (collectionsCardId) => dispatch => (
  CollectionsCardAPIUtil.deleteCollectionsCard(collectionsCardId).then(
    () => dispatch(removeCollectionsCard(collectionsCardId)),
    err => dispatch(receiveErrors(err))
  )
); 