import * as CardAPIUtil from '../util/card_api_util'; 

export const RECEIVE_CARDS = "RECEIVE_CARDS"; 
export const RECEIVE_CARD = "RECEIVE_CARD"; 
export const REMOVE_CARD = "REMOVE_CARD"; 
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"; 
export const RECEIVE_CARDS_AND_USERS = "RECEIVE_CARDS_AND_USERS"; 
export const RECEIVE_COLLECTION_AND_CARDS = "RECEIVE_COLLECTION_AND_CARDS"; 
export const TOGGLE_RESET_ALL_CARDS = "TOGGLE_RESET_ALL_CARDS"; 

// ACTIONS
const receiveCards = (data) => ({
  type: RECEIVE_CARDS, 
  data
}); 

const receiveCard = (card) => ({
  type: RECEIVE_CARD, 
  card
}); 

const removeCard = (cardId) => ({
  type: REMOVE_CARD, 
  cardId
});

const receiveCardErrors = (errors) => ({
  type: RECEIVE_ERRORS, 
  errors
}); 

const receiveCardsAndUsers = (data) => ({
  type: RECEIVE_CARDS_AND_USERS,
  data
}); 
const receiveCollectionAndCards = (data) => ({
  type: RECEIVE_COLLECTION_AND_CARDS,
  data
}); 
export const toggleResetAllCards = () => ({
  type: TOGGLE_RESET_ALL_CARDS,
}); 

// THUNK ACTION CREATORS
export const fetchCardsAndUsers = (data) => dispatch => (
  CardAPIUtil.fetchCards(data).then(
    data => dispatch(receiveCardsAndUsers(data)),
    err => dispatch(receiveCardErrors(err))
  )
); 
export const fetchUserCards = (data) => dispatch => (
  CardAPIUtil.fetchUserCards(data).then(
    data => dispatch(receiveCards(data)),
    err => dispatch(receiveCardErrors(err.responseJSON))
  )
); 
export const fetchCard = (cardId) => dispatch => (
  CardAPIUtil.fetchCard(cardId).then(
    card => dispatch(receiveCard(card)), 
    err => dispatch(receiveCardErrors(err.responseJSON))
  )
); 
export const createCard = (card) => dispatch => (
  CardAPIUtil.createCard(card).then(
    card => dispatch(receiveCard(card)), 
    err => dispatch(receiveCardErrors(err.responseJSON))
  )
); 
export const updateCard = (card) => dispatch => (
  CardAPIUtil.updateCard(parseInt(card.get("card[id]")), card).then(
    card => dispatch(receiveCard(card)), 
    err => dispatch(receiveCardErrors(err.responseJSON))
  )
); 
export const deleteCard = (cardId) => dispatch => (
  CardAPIUtil.deleteCard(cardId).then(
    () => dispatch(removeCard(cardId)), 
    err => dispatch(receiveCardErrors(err.responseJSON))
  )
); 

// FOLLOWS
export const fetchFollowedUsersCards = (data) => dispatch => {
  return (
  CardAPIUtil.fetchFollowedUsersCards(data).then(
    data => dispatch(receiveCardsAndUsers(data)), 
    err => dispatch(receiveCardErrors(err.responseJSON))
  )
)}; 
  
// COLLECTIONS
export const fetchCollectionCards = (data) => dispatch => (
  CardAPIUtil.fetchCollectionCards(data).then(
    data => dispatch(receiveCollectionAndCards(data)), 
    err => dispatch(receiveCardErrors(err.responseJSON))
  )
); 
    
export const fetchLikedCards = (data) => dispatch => (
  CardAPIUtil.fetchLikedCards(data).then(
    data => dispatch(receiveCards(data)), 
    err => dispatch(receiveCardErrors(err.responseJSON))
  )
); 

// TESTING
// window.fetchFollowedUsersCards = fetchFollowedUsersCards; 