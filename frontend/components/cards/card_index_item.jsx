import React from 'react'; 
import { Link } from 'react-router-dom'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faHeart } from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import CardIndexItemFooter from './card_index_item_footer'; 

const CardIndexItem = ({ card, user }) => {
  return (
    <li className="card-index-item">
      <Link to={`/cards/${card.id}`}>
        <div className="card-img">
          <section className="card-hover-info">
            <h3>{card.title}</h3>
            <aside className="card-buttons">
              <div /* onClick={} */ >
                <button>{<FontAwesomeIcon icon={faFolderPlus}/>}</button>
              </div>
              <div /* onClick={} */ >
                <button>{<FontAwesomeIcon icon={faHeart}/>}</button>
              </div>
            </aside>
          </section>
          <img src={card.img} alt={card.title}/>
        </div>
      </Link>
      <CardIndexItemFooter card={card} user={user} />
    </li>
  )
}

export default CardIndexItem; 