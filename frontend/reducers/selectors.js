
// needs selectors for: 

// Users:
// numLikes, followers, numfollowing, followed

export const selectAllUsers = (state) => {
  return state.entities.users; 
}

export const selectUserByCard = (state, card) => {
  return state.entities.users[card.creatorId]; 
}; 

// Cards:
// liked, saved, followedUsersCards
export const allCardsArray = (state) => {
  return toArray(state.entities.cards); 
}; 

export const selectCardsByCategory = (state, category) => {
  const { cards } = state.entities; 

  if (category === 'all') return toArray(cards); 
  
  return toArray(cards).filter(card => card.category === category); 
}; 

export const selectCardsByUserId = (state, userId) => {
  const cardsArr = toArray(state.entities.cards);
  return cardsArr.filter( card => card.creatorId === parseInt(userId));
}; 

// Collections:

// takes in an array of cards
export const selectCardsByCollectionId = (cards, collectionId) => {
  return cards.filter( card => (
    card.collectionId === parseInt(collectionId)
  )); 
}

export const selectCollectionsByCuratorId = (state, curatorId) => {
  return toArray(state.entities.collections).filter( collection => (
    collection.curatorId === parseInt(curatorId)
  )); 
}; 

// Collections Card
export const selectCollectionsArrByCardId = (state, cardId) => {
  return toArray(state.entities.collectionsCards).filter( cc => (
    cc.cardId === cardId
  ))
}

// Follows
// creatorIds for where the followerId is the current user

// returns an array of creatorIds
export const selectFollowedUsers = (state, followerId) => {
  return selectFollows(state, followerId).map(follow => follow.creatorId)
}; 

// takes in an array of follows
export const selectFollowId = (follows, followerId, creatorId) => {
  return toArray(follows).filter(follow => (
    follow.followerId === followerId && follow.creatorId === creatorId
  ))[0].id
}

// HELPER METHODS
const toArray = obj => {
  return Object.values(obj); 
}; 

const selectFollows = (state, followerId) => {
  return toArray(state.entities.follows).filter(follow => (
    follow.followerId === followerId
  ))
}; 