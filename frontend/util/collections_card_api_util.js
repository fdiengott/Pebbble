
export const createCollectionsCards = (collectionsCard) => (
  $.ajax({
    method: "POST", 
    url: "/api/collections_cards",
    data: collectionsCard,
  })
); 
export const createCollectionsCards = (collectionsCardId) => (
  $.ajax({
    method: "POST", 
    url: `/api/collections_cards/${collectionsCard}`,
  })
); 



