
export const fetchCards = () => (
  $.ajax({
    method: "GET", 
    url: "api/cards"
  })
);

export const fetchUserCards = (userId) => (
  $.ajax({
    method: "GET", 
    url: `api/users/${userId}/cards`
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

export const updateCard = ({cardId, formData}) => (
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