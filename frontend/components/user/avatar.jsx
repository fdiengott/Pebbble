import React from 'react'; 

const Avatar = ({currentUser}) => {

  const avatar = currentUser ? 
    currentUser.profilePicture || window.avatar_default : 
    window.avatar_default

  return (
    <div className="image-cropper">
      <img src={avatar} alt="profile avatar" className="avatar"/>
    </div>
  )
}

export default Avatar; 