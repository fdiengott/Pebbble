import React from 'react'; 
import { Link } from 'react-router-dom'; 

import UserNavContainer from './../user/user_nav_container';

const Header = ({ url }) => {
  // debugger
  const logo = (
    <figure className="header-logo logo">
      <Link to="/">Pebbble</Link>
    </figure>
  )

  const renderedHeader = (url !== '/cards/new') ? (
    <header>
      <ul role="list">
        <li>{ logo }</li>
        <li>Github Link</li>
        <li>LinkedIn</li>
      </ul>
      <UserNavContainer />
    </header>
  ) : (
    <header className="header-new-card">
      <ul role="list">
        <li>{ logo }</li>
        <li><h1>Publish your Card</h1></li>
        <li><a onClick={() => window.history.back()}>X</a></li>
      </ul>
    </header>
  )

  // to add card create
  const pathsNotToRender = ["/login", "/signup"]; 

  return pathsNotToRender.includes(url) ? null : renderedHeader
}; 

export default Header; 