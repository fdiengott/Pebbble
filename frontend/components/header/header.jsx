import React from 'react'; 
import { Link } from 'react-router-dom'; 

import UserNavContainer from './../user/user_nav_container';

const Header = ({ loggedIn, url }) => {

  const links = (
    <ul>
      <li>
        <figure className="header-logo logo">
          <Link to="/">Pebbble</Link>
        </figure>
      </li>
      <li>Github Link</li>
      <li>LinkedIn</li>
    </ul>
  )

  // to add card create
  const pathsNotToRender = ["/login", "/signup"]; 

  return pathsNotToRender.includes(url) ? (
    null
  ) : (
    <header>
      { links }
      <UserNavContainer />
    </header>
  )
}; 

export default Header; 