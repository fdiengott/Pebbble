
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

export const updateUser = (user) => (
  $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: { user }
  })
); 


// is this right? 
export const searchUsers = (search) => (
  $.ajax({
    method: "GET", 
    url: `api/users/search?${search}`,
  })
); 
