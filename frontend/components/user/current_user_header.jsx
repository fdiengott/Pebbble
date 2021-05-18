import React from 'react'; 
import { Link } from 'react-router-dom'; 
import Avatar from './avatar';


const CurrentUserHeader = ({currentUser}) => {

  return (
    <section className='account-header-container'>
      <div className="details-container">
        <Avatar user={currentUser} />
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