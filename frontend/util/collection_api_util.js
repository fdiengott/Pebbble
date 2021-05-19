
export const fetchCollection = (collectionId) => (
  $.ajax({
    method: "GET", 
    url: `/api/collections/${collectionId}`,
  })
); 
export const createCollection = (collection) => (
  $.ajax({
    method: "POST", 
    url: `/api/collections/`,
    data: collection,
  })
); 
export const updateCollection = (collection) => (
  $.ajax({
    method: "POST", 
    url: `/api/collections/${collection.id}`,
    data: collection,
  })
); 
export const deleteCollection = (collectionId) => (
  $.ajax({
    method: "DELETE", 
    url: `/api/collections/${collectionId}`,
  })
); 

