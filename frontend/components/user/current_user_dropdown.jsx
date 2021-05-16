import React from 'react'; 
import { Link } from 'react-router-dom'; 
import Avatar from './avatar';

const CurrentUserDropdown = (props) => {
  const { logout, loggedIn, currentUser } = props; 
  
  return loggedIn ? (
    <>
      <ul role="list" className="user-nav">
        <li>
          <Link to="/account/cards">
            <Avatar user={currentUser} />
          </Link>
          <ul role="list" className="user-dropdown">
            <li><Link to="/account/cards">Profile</Link></li>
            <hr/>
            <li><Link to="/account/about/edit">Edit Profile</Link></li>
            <hr/>
            <li><Link to="/account/likes">Liked Cards</Link></li>
            <li><Link to="/account/collections">Collections</Link></li>
            <hr/>
            <li><Link to="/all" onClick={logout}>Sign Out</Link></li>
          </ul>
        </li>
        <li><Link to="cards/new" className="pink-button">Upload</Link></li>
      </ul>
    </>
  ) : (
    <ul role="list" className="header-auth-buttons">
      <Link to="/login" className="login-btn">Sign in</Link>
      <Link to="/signup" className="signup-btn">Sign up</Link>
    </ul>
  )
  
}; 

export default CurrentUserDropdown; 
