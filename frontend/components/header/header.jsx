import React from 'react'; 
import { Link } from 'react-router-dom'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';   

import UserNavContainer from './../user/user_nav_container';

const Header = ({ url, loggedIn }) => {
  // debugger
  const logo = (
    <figure className="header-logo logo">
      <Link to="/">pebbble</Link>
    </figure>
  )

  const signupBanner = !loggedIn ? (
    <section className="signup-banner">
      <main>
        <h1>Dicover the world's top designers & creatives</h1>
        <p>Pebbble is the leading destination to find & showcase creative work and home to the world's best design professionals</p>
        <Link to="/signup" className="pink-button">Sign up</Link>
      </main>
      <aside>
        <img src={window.splash_img} alt="Pebbble is the leading destination to find & showcase creative work and home to the world's best design professionals"/>
        <span>Art by Romain Briaux</span>
      </aside>
    </section>
  ) : (
    null
  ); 

  const renderedHeader = (url !== '/cards/new') ? (
    <>
      <header className="standard-header">
        <ul role="list">
          <li>{ logo }</li>
          <li>
            <a className="icon" target="_blank" href="https://github.com/fdiengott/" >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a className="icon" target="_blank" href="https://www.linkedin.com/in/freddiengott/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
        <UserNavContainer />
      </header>
      { signupBanner }
    </>
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