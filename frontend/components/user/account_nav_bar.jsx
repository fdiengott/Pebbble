import React from 'react'; 
import { NavLink } from 'react-router-dom'; 

const AccountNavBar = ({ user, currentUser }) => {

  // if it's the current user make the url build off of /account/, otherwise the user's show page
  const urlRoot = user ? `users/${user.id}` : 'account'; 

  const renderedUser = user || currentUser; 

  return (
    <div className="account-nav-borderline">
      <nav className="account-nav">
        <ul role="list" className="account-nav-list">

          <li><NavLink to={`/${urlRoot}/cards`}>Cards <span    
            className="user-stats">{renderedUser.numCards}</span></NavLink></li>

          <li><NavLink to={`/${urlRoot}/collections`}>Collections <span    
            className="user-stats"
            >{renderedUser.numCollections}</span></NavLink></li>

          <li><NavLink to={`/${urlRoot}/likes`}>Liked Cards <span    
            className="user-stats"
            >{renderedUser.numLikedCards}</span></NavLink></li>

          <li><NavLink to={`/${urlRoot}/profile`}>About</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default AccountNavBar; 