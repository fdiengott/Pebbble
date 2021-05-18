import React from 'react'; 
import Avatar from './avatar'; 


const UserShowHeader = ({user}) => {

  return (
    <section className='user-show-container'>
      <div className="details-container">
        <Avatar user={user}/>
        <ul role="list">
          <h1>{user.name}</h1>
          <a className="gray-button">Follow</a>
          <a className="pink-button">Hire Me</a>
        </ul>
      </div>
    </section>
  )
}

export default UserShowHeader; 