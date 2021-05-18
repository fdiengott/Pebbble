import * as CardAPIUtil from '../util/card_api_util'; 

export const RECEIVE_CARDS = "RECEIVE_CARDS"; 
export const RECEIVE_CARD = "RECEIVE_CARD"; 
export const REMOVE_CARD = "REMOVE_CARD"; 
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"; 
export const RECEIVE_CARDS_AND_USERS = "RECEIVE_CARDS_AND_USERS"; 

// ACTIONS
const receiveCards = (cards) => ({
  type: RECEIVE_CARDS, 
  cards
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

// THUNK ACTION CREATORS
export const fetchCardsAndUsers = () => dispatch => (
  CardAPIUtil.fetchCards().then(
    data => dispatch(receiveCardsAndUsers(data)),
    err => dispatch(receiveCardErrors(err))
  )
); 
export const fetchUserCards = (userId) => dispatch => (
  CardAPIUtil.fetchUserCards(userId).then(
    cards => dispatch(receiveCards(cards)), 
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
export const fetchFollowedUsersCards = (userId) => dispatch => (
  CardAPIUtil.fetchFollowedUsersCards(userId).then(
    data => dispatch(receiveCardsAndUsers(data)), 
    err => dispatch(receiveCardErrors(err.responseJSON))
  )
); 

// TESTING
window.fetchFollowedUsersCards = fetchFollowedUsersCards; 