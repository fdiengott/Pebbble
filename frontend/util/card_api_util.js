
export const fetchCards = (data) => {
  // debugger
  
  return (
  $.ajax({
    method: "GET", 
    url: "api/cards",
    data,
  })
)};

export const fetchUserCards = (data) => (
  $.ajax({
    method: "GET", 
    url: `api/users/${data.userId || data.currentUserId}/cards`,
    data, 
  })
);

export const fetchCard = cardId => (
  $.ajax({
    method: "GET", 
    url: `api/cards/${cardId}`
  })
); 
  
export const createCard = ( card ) => (
  $.ajax({
    method: "POST", 
    url: `/api/cards`,
    data: card, 
    contentType: false, 
    processData: false
  })  
);

export const updateCard = (cardId, formData) => (
  $.ajax({
    method: "PATCH", 
    url: `/api/cards/${cardId}`,
    data: formData, 
    contentType: false, 
    processData: false
  })
); 

export const deleteCard = cardId => (
  $.ajax({
    method: "DELETE", 
    url: `api/cards/${cardId}`
  })
); 


// FOLLOWS
export const fetchFollowedUsersCards = (data) => (
  $.ajax({
    method: "GET", 
    url: `api/follows/${data.userId}/cards`,
    data, 
  })
);


// COLLECTIONS
export const fetchCollectionCards = (data) => (
  $.ajax({
    method: "GET", 
    url: `/api/collections/${data.collectionId}/cards`,
    data,
  })
); 


export const fetchLikedCards = (data) => (
  $.ajax({
    method: "GET", 
    url: `/api/cards/${data.userId}/likes`,
    data, 
  })
)