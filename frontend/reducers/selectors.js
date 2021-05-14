
// needs selectors for: 

// Users:
// numLikes, followers, numfollowing, followed

export const userByCard = (state, card) => {
  return state.entities.users[card.creatorId]; 
}; 

// Cards:
// liked, saved, followedUsersCards
export const cardsArray = (cards) => {
  return Object.values(cards); 
}; 

export const selectCardsByCategory = (state, category) => {
  const { cards } = state.entities; 
  
  return cardsArray(cards).filter(card => card.style === category); 
}; 

export const cardsByUserId = (state, userId) => {
  const cardsArr = cardsArray(state.entities.cards);
  return cardsArr.filter( card => card.creatorId === userId );
}; 

// Collections:
// numCards


// Follows
// creatorIds for where the followerId is the current user