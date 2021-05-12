import React from 'react'; 
import { Link } from 'react-router-dom'; 

import UserNavContainer from './../user/user_nav_container';

const Header = () => (
  <header>
    <ul>
      <li>
        <figure className="header-logo logo">
          <Link to="/">Pebbble</Link>
        </figure>
      </li>
      <li>Github Link</li>
      <li>LinkedIn</li>
    </ul>
    <UserNavContainer />
  </header>
); 

export default Header; 