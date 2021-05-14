
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
  return cardsArr.filter( card => card.creatorId === userId );
}; 

// Collections:
// numCards


// Follows
// creatorIds for where the followerId is the current user


// HELPER METHODS
const toArray = obj => {
  return Object.values(obj); 
}; 