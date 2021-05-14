
// needs selectors for: 

// Users:
// numLikes, followers, numfollowing, followed

export const userByCard = (state, card) => {
  return state.entities.users[card.creatorId]; 
}; 

// Cards:
// liked, saved, followedUsersCards
export const cardsArray = (state) => {
  return Object.values(state.entities.cards); 
}; 

export const selectCardsByCategory = (state, category) => {
  const { cards } = state.entities; 

  return cards.filter(card => card.style === category); 
}; 

// Collections:
// numCards