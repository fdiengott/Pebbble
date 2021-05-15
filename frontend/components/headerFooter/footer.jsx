import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Footer = ({ url, homePage, pathsNotToRender }) => {

  if (pathsNotToRender.includes(url)) return null; 


  const logo = (
    <figure className="header-logo logo">
      <Link to="/all">pebbble</Link>
    </figure>
  )

  return (
    <footer>
      <section>
        { logo }
        <p>Dribbble is the world’s leading community for creatives to share, grow, and get hired.</p>
      </section>
      <div>
        <p className="copywright-text">© 2021 Dribbble. All rights reserved.</p>
        <img src={window.pebbble_svg} alt="pebbble logo"/>
        {/* if i include a global count of cards posted */}
      </div>
    </footer>
  )
}; 

export default Footer; 