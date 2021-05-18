import React from 'react'; 
import { Link } from 'react-router-dom'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';   

import CurrentUserDropdownContainer from '../user/current_user_dropdown_container.js';

const Header = ({ url, loggedIn, homePage, pathsNotToRender }) => {

  if (pathsNotToRender.includes(url)) return null; 

  const logo = (
    <figure className="header-logo logo">
      <Link to="/all">pebbble</Link>
    </figure>
  )

  const signupBanner = (!loggedIn && homePage) ? (
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

  const urlArr = url.split("/")

  return (url !== '/cards/new') ? (
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
        <CurrentUserDropdownContainer />
      </header>
      { signupBanner }
    </>
  ) : (
    <header className="header-card-form">
      <ul role="list">
        <li>{ logo }</li>
        <li><h1>{urlArr[urlArr.length-1] === "edit" ? "Edit your Card" : "Publish your Card"}</h1></li>
        <li><a 
        onClick={() => window.history.back()}
        className="close-btn"
        >X</a></li>
      </ul>
    </header>
  )

}; 

export default Header; 