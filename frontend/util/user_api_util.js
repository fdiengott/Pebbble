
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

export const updateUser = ({id, formData}) => (
  $.ajax({
    method: "PATCH",
    url: `/api/users/${id}`,
    data: formData,
    contentType: false, 
    processData: false, 
  })
); 


// FOLLOWS
export const fetchFollowers = (creatorId) => (
  $.ajax({
    method: "GET", 
    url: `/api/users/${creatorId}/followers`,
  })
); 

export const fetchFollowedUsers = (followerId) => (
  $.ajax({
    method: "GET", 
    url: `/api/users/${followerId}/followedUsers`,
  })
); 


// SEARCH

// is this right? 
export const searchUsers = (search) => (
  $.ajax({
    method: "GET", 
    url: `api/users/search?${search}`,
  })
); 
