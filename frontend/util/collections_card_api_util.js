


export const createCollectionsCard = (collectionsCard) => (
  $.ajax({
    method: "POST", 
    url: "/api/collections_cards",
    data: collectionsCard,
  })
); 
export const deleteCollectionsCard = (collectionsCardId) => (
  $.ajax({
    method: "DELETE", 
    url: `/api/collections_cards/${collectionsCardId}`,
  })
); 



