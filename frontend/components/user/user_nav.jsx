import React from 'react'; 
import { Link } from 'react-router-dom'; 

const UserNav = (props) => {
  const { logout, loggedIn, currentUser } = props; 

  const avatar = currentUser ? 
    currentUser.imageUrl || window.avatar_default : 
    window.avatar_default
  
  return loggedIn ? (
    <>
      <ul role="list" className="user-nav">
        <li>
          <Link to="/account">
            <img src={avatar} alt="profile avatar" className="avatar"/>
          </Link>
          <ul role="list" className="user-dropdown">
            <li><Link to="/account">Profile</Link></li>
            <hr/>
            <li><Link to="/account/about/edit">Edit Profile</Link></li>
            <hr/>
            <li><Link to="/account/likes">Liked Cards</Link></li>
            <li><Link to="/account/collections">Collections</Link></li>
            <hr/>
            <li><Link to="/" onClick={logout}>Sign Out</Link></li>
          </ul>
        </li>
        <li><Link to="cards/new" className="pink-button">Upload</Link></li>
      </ul>
    </>
  ) : (
    <ul role="list">
      <Link to="/login">Sign in</Link>
      <Link to="/signup">Sign up</Link>
    </ul>
  )
  
}; 

export default UserNav; 
