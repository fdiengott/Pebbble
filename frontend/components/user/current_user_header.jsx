import React from 'react'; 
import { Link } from 'react-router-dom'; 


const CurrentUserHeader = ({avatar, currentUser}) => {

  return (
    <section className='account-header-container'>
      <div className="details-container">
        <div className="image-cropper">
          <img src={avatar} alt="Profile picture avatar"/>
        </div>
        <ul role="list">
          <h1>{currentUser.name}</h1>
          <p>{currentUser.location}</p>
          <Link className="edit-profile-btn" to="/account/about/edit">Edit Profile</Link>
        </ul>
      </div>
    </section>
  )
}

export default CurrentUserHeader; 