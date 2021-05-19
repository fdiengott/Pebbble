import * as CollectionAPIUtil from '../util/collection_api_util'; 

export const RECEIVE_COLLECTIONS = "RECEIVE_COLLECTIONS"; 
export const RECEIVE_COLLECTION = "RECEIVE_COLLECTION"; 
export const REMOVE_COLLECTION = "REMOVE_COLLECTION"; 
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"; 


// ACTIONS
const receiveCollections = (collections) => ({
  type: RECEIVE_COLLECTIONS,
  collections
}); 
const receiveCollection = (collection) => ({
  type: RECEIVE_COLLECTION,
  collection
}); 
const removeCollection = (collectionId) => ({
  type: REMOVE_COLLECTION, 
  collectionId
}); 
const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
}); 


// THUNK ACTION CREATORS
export const fetchUserCollections = (curatorId) => dispatch => (
  CollectionAPIUtil.fetchUserCollections(curatorId).then(
    collections => dispatch(receiveCollections(collections)),
    err => dispatch(receiveErrors(err))
  )
);
export const fetchCollection = (collectionId) => dispatch => (
  CollectionAPIUtil.fetchCollection(collectionId).then(
    collection => dispatch(receiveCollection(collection)),
    err => dispatch(receiveErrors(err))
  )
);
export const createCollection = (collection) => dispatch => (
  CollectionAPIUtil.createCollection(collection).then(
    collection => dispatch(receiveCollection(collection)),
    err => dispatch(receiveErrors(err))
  )
);
export const updateCollection = (collection) => dispatch => (
  CollectionAPIUtil.updateCollection(collection).then(
    collection => dispatch(receiveCollection(collection)),
    err => dispatch(receiveErrors(err))
  )
);
export const deleteCollection = (collectionId) => dispatch => (
  CollectionAPIUtil.deleteCollection(collectionId).then(
    () => dispatch(removeCollection(collectionId)),
    err => dispatch(receiveErrors(err))
  )
);