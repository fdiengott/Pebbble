import React from 'react'; 
import { Link } from 'react-router-dom'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngellist, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';   

const Footer = ({ url, pathsNotToRender }) => {
  const urlArr = url.split("/"); 
  const cardEdit = urlArr[urlArr.length-1] === 'edit' && urlArr[1] === 'cards'; 

  if (pathsNotToRender.includes(url) || cardEdit) return null; 


  const logo = (
    <figure className="footer-logo logo">
      <Link to="/all" onClick={() => window.scrollTo(0,0)}>pebbble</Link>
    </figure>
  )

  return (
    <footer className="main-footer">
      <section>
        <aside>
          { logo }
          <p>Pebbble is the world’s leading community for creatives to share, grow, and get hired.</p>
          <div className="personal-links">
            <a className="icon" target="_blank" href="https://github.com/fdiengott/" >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="icon" target="_blank" href="https://www.linkedin.com/in/freddiengott/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="icon" target="_blank" href="https://angel.co/u/freddy-diengott">
              <FontAwesomeIcon icon={faAngellist} />
            </a>
          </div>
        </aside>
        <ul role="list">
          <h3>Skills</h3>
          <li>Classical Singing</li>
          <li>Jazz Piano</li>
          <li>Graphic Design</li>
          <li>Audio Editing</li>
          <li>Event Planning</li>
        </ul>
        <ul role="list">
          <h3>Main Technologies</h3>
          <li>React/Redux</li>
          <li>Ruby on Rails</li>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>CSS3</li>
        </ul>
        <ul role="list">
          <h3>Hobbies</h3>
          <li>Reading</li>
          <li>Podcasts</li>
          <li>DnD</li>
          <li>Rock Climbing</li>
          <li>Biking</li>
          <li>Vegan Cooking/Baking</li>
        </ul>
        <ul role="list">
          <h3>Words I enjoy</h3>
          <li>Breviloquent</li>
          <li>Gamboge</li>
          <li>Assiduous</li>
          <li>Ebullient</li>
          <li>Autodidactic</li>
          <li>Kintsugi</li>
        </ul>
      </section>
      <div>
        <p className="copywright-text">© 2021 Pebbble. All rights reserved.</p>
        <img src={window.pebbble_svg} alt="pebbble logo"/>
        {/* if i include a global count of cards posted */}
      </div>
    </footer>
  )
}; 

export default Footer; 