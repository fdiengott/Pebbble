
export const fetchUsers = () => (
  $.ajax({
    method: 'GET', 
    url: '/api/users'
  })
); 

export const fetchUser = (userId) => (
  $.ajax({
    method: "GET", 
    url: `/api/users/${userId}`
  })
); 

export const updateUser = ({id, formData}) => {
  
  return (
  $.ajax({
    method: "PATCH",
    url: `/api/users/${id}`,
    data: formData,
    contentType: false, 
    processData: false, 
  })
)}; 


// is this right? 
export const searchUsers = (search) => (
  $.ajax({
    method: "GET", 
    url: `api/users/search?${search}`,
  })
); 
