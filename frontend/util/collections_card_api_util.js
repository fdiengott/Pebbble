

export const fetchUserCollectionsCard = ({ userId }) => (
  $.ajax({
    method: "GET", 
    url: `/api/collections_cards/${userId}` 
  })
)

export const createCollectionsCard = (collectionsCard) => (
  $.ajax({
    method: "POST", 
    url: "/api/collections_cards",
    data: { collections_card: collectionsCard },
  })
); 
export const deleteCollectionsCard = (collectionsCardId) => (
  $.ajax({
    method: "DELETE", 
    url: `/api/collections_cards/${collectionsCardId}`,
  })
); 



