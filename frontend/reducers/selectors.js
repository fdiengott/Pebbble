
// needs selectors for: 

// Users:
// numLikes, followers, numfollowing, followed

// Cards:
// liked, saved
export const selectCardsByCategory = (state, category) => {
  const { cards } = state.entities; 

  return cards.filter(card => card.style === category); 
}; 

// Collections:
// numCards