import React from 'react'; 


const UserShowHeader = (props) => {

  return (
    <section className='user-show-container'>
      <div className="details-container">
        <div className="image-cropper">
          <img src={avatar} alt="Profile picture avatar"/>
        </div>
        <ul role="list">
          <h1>{user.name}</h1>
          {/* <button>Follow</button> */}
          {/* <button className="pink-button">Hire Me</button> */}
        </ul>
      </div>
    </section>
  )
}

export default UserShowHeader; 