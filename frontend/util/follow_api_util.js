
export const fetchFollows = () => (
  $.ajax({
    method: "GET", 
    url: "api/follows"
  })
); 

export const fetchUserFollows = (followerId) => (
  $.ajax({
    method: "GET", 
    url: `api/users/${followerId}/follows`
  })
); 

export const createFollow = (follow) => (
  $.ajax({
    method: "POST", 
    url: "api/follows",
    data: follow,
  })
); 

export const deleteFollow = (followId) => (
  $.ajax({
    method: "DELETE", 
    url: `api/follows/${followId}`,
  })
); 